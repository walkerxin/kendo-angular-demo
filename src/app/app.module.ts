import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { GridModule } from '@progress/kendo-angular-grid';
import { PopupModule } from "@progress/kendo-angular-popup";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { DropDownListModule } from "@progress/kendo-angular-dropdowns";

import { ProductsService } from "./products.service";
import { PopupAnchorDirective } from "./popup.anchor-target.directive";

@NgModule({
  declarations: [
    AppComponent,
    PopupAnchorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    
    GridModule,
    DropDownListModule,
    PopupModule,
    InputsModule,
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
