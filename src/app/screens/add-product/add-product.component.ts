import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import {CategoryService} from './../../services/category.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

 @Output() removeEvent = new EventEmitter<any>();
  @Output() editEvent = new EventEmitter<any>();

  constructor( 
   private cateService: CategoryService,
  	// private route: ActivatedRoute,
  	// private router:Router
  	) { }

    ngOnInit() {
     this.cateService.getCategoryList().subscribe((data)=>{
      this.category = data;
    });
           
  }

   category=[];

}
