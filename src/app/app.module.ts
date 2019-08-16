import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CateItemComponent } from './components/cate-item/cate-item.component';
import { CateEditFormComponent } from './components/cate-edit-form/cate-edit-form.component';
import { HomeComponent } from './screens/home/home.component';
import { CateDetailComponent } from './screens/cate-detail/cate-detail.component';
import { AddCateComponent } from './screens/add-cate/add-cate.component';
import { EditCateComponent } from './screens/edit-cate/edit-cate.component';
import { AddProductComponent } from './screens/add-product/add-product.component';
import { EditProductComponent } from './screens/edit-product/edit-product.component';
import { HotelComponent } from './screens/hotel/hotel.component';
import { AddHotelComponent } from './screens/add-hotel/add-hotel.component';
import { EditHotelComponent } from './screens/edit-hotel/edit-hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    CateItemComponent,
    CateEditFormComponent,
    HomeComponent,
    CateDetailComponent,
    AddCateComponent,
    EditCateComponent,
    AddProductComponent,
    EditProductComponent,
    HotelComponent,
    AddHotelComponent,
    EditHotelComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
