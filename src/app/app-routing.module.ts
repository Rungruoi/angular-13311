import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './screens/home/home.component';
import {CateDetailComponent} from './screens/cate-detail/cate-detail.component';
import {AddCateComponent} from './screens/add-cate/add-cate.component';
import {AddProductComponent} from './screens/add-product/add-product.component';
import {EditCateComponent} from './screens/edit-cate/edit-cate.component';
import {EditProductComponent} from './screens/edit-product/edit-product.component';


const routes: Routes = [
		
	{
		path:"",
		component:HomeComponent
	},
	{
		path:"cate-detail/:id",
		component:CateDetailComponent
	},
	{
		path:"addcate",
		component:AddCateComponent
	},
	{
		path:"editcate",
		component:EditCateComponent
	},
	{
		path:"addproduct",
		component:AddProductComponent
	},
	{
		path:"editproduct",
		component:EditProductComponent
	}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
