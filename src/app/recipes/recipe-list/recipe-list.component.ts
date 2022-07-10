import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('shrimp', 'seafood', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    new Recipe('sandwich', 'brand', 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/is8315-image-kwvyf6os.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=e962f22fe9c1fc09ba57aef5a7ca63a1')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
