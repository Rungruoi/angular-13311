import { Component, OnInit } from '@angular/core';
//import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {CategoryService} from './../../services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
  export class HomeComponent implements OnInit {
  
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
 
   removeCategory(cate){
    this.cateService.removeCategory(cate.id)
        .subscribe((data) => {
          console.log(data);
          this.category = this.category.filter(
            (item) => item.id != cate.id
          )
        });
  } 


}
