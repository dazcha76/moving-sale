import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { BooksComponent } from './products/books/books.component';
import { CampingComponent } from './products/camping/camping.component';
import { EducationalComponent } from './products/educational/educational.component';
import { FitnessComponent } from './products/fitness/fitness.component';
import { ToysComponent } from './products/toys/toys.component';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FreeComponent } from './products/free/free.component';
import { ChristmasComponent } from './products/christmas/christmas.component';
import { FurnitureComponent } from './products/furniture/furniture.component';
import { ForeignLanguagesComponent } from './products/foreign-languages/foreign-languages.component';
import { HomeDecorComponent } from './products/home-decor/home-decor.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'camping', component: CampingComponent },
  { path: 'christmas', component: ChristmasComponent },
  { path: 'educational', component: EducationalComponent },
  { path: 'fitness', component: FitnessComponent },
  { path: 'foreign-languages', component: ForeignLanguagesComponent },
  { path: 'free', component: FreeComponent },
  { path: 'furniture', component: FurnitureComponent },
  { path: 'home-decor', component: HomeDecorComponent },
  { path: 'toys', component: ToysComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    NavbarComponent,
    ProductComponent,
    ProductsComponent,
    BooksComponent,
    CampingComponent,
    EducationalComponent,
    FitnessComponent,
    ToysComponent,
    HomeComponent,
    ModalComponent,
    FreeComponent,
    ChristmasComponent,
    FurnitureComponent,
    ForeignLanguagesComponent,
    HomeDecorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
