import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ProductsService } from "./products.service";
import { categories } from "./categories";
import { Category } from "./model";
import { Product } from "./products";
import {
  AddEvent,
  CancelEvent,
  EditEvent,
  RemoveEvent,
  SaveEvent,
  GridComponent,
} from "@progress/kendo-angular-grid";

const createFormGroup = (dataItem: Product) =>
  new FormGroup({
    ProductID: new FormControl(dataItem.ProductID),
    ProductName: new FormControl(dataItem.ProductName, Validators.required),
    UnitPrice: new FormControl(dataItem.UnitPrice),
    UnitsInStock: new FormControl(
      dataItem.UnitsInStock,
      Validators.compose([
        Validators.required,
        Validators.pattern("^[0-9]{1,3}"),
      ])
    ),
    CategoryID: new FormControl(dataItem.CategoryID, Validators.required),
  });
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';

  public gridData!: Product[];
  public categories: Category[] = categories;
  public formGroup: FormGroup | undefined;
  private editedRowIndex: number | undefined;

  constructor(private service: ProductsService) {}

  public ngOnInit(): void {
    this.gridData = this.service.products();
  }

  public category(id: number): Category {
    this.categories.find((x) => x.CategoryID === id);
    return {
      'CategoryID': 2,
      'CategoryName': 'Condiments',
      'Description': 'Sweet and savory sauces, relishes, spreads, and seasonings'
    };
  }

  public addHandler({ sender }: AddEvent): void {
    this.closeEditor(sender);

    this.formGroup = createFormGroup({
      ProductName: "",
      UnitPrice: 0,
      UnitsInStock: 5,
      CategoryID: 1,
    });

    sender.addRow(this.formGroup);
  }

  public editHandler({ sender, rowIndex, dataItem }: EditEvent): void {
    this.closeEditor(sender);

    this.formGroup = createFormGroup(dataItem);

    this.editedRowIndex = rowIndex;

    sender.editRow(rowIndex, this.formGroup);
  }

  public cancelHandler({ sender, rowIndex }: CancelEvent): void {
    this.closeEditor(sender, rowIndex);
  }

  public saveHandler({ sender, rowIndex, formGroup, isNew }: SaveEvent): void {
    const product = formGroup.value;

    this.service.save(product, isNew);

    sender.closeRow(rowIndex);
  }

  public removeHandler({ dataItem }: RemoveEvent): void {
    this.service.remove(dataItem);
  }

  private closeEditor(
    grid: GridComponent,
    rowIndex = this.editedRowIndex
  ): void {
    grid.closeRow(rowIndex);
    this.editedRowIndex = undefined;
    this.formGroup = undefined;
  }
}
