
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './screens/home/home.component';
import {CateDetailComponent} from './screens/cate-detail/cate-detail.component';
import {AddCateComponent} from './screens/add-cate/add-cate.component';
import {AddProductComponent} from './screens/add-product/add-product.component';
import {EditCateComponent} from './screens/edit-cate/edit-cate.component';
import {EditProductComponent} from './screens/edit-product/edit-product.component';
import {HotelComponent} from './screens/hotel/hotel.component';
import {AddHotelComponent} from './screens/add-hotel/add-hotel.component';
import {EditHotelComponent} from './screens/edit-hotel/edit-hotel.component';

const routes: Routes = [
		
	{
		path:"",
		component:HomeComponent
	},
	{
		path:"cate-detail/:cateid",
		component:CateDetailComponent
	},
	{
		path:"addcate",
		component:AddCateComponent
	},
	{
		path:"edit-cate/:id",
		component:EditCateComponent
	},
	{
		path:"cate-detail/:cateid/addproduct",
		component:AddProductComponent
	},
	{
		path:"cate-detail/:cateid/edit-product/:id",
		component:EditProductComponent
	},
	{
		path:"hotel",
		component:HotelComponent
	},
	{
		path:"hotel/edit-hotel/:id",
		component:EditHotelComponent
	},
	{
		path:"addhotel",
		component:AddHotelComponent
	}
	

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
