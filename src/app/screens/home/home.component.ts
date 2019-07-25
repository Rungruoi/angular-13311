import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {CategoryService} from './../../services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
  export class HomeComponent implements OnInit {
  
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
 
  childOnRemove(rmObj){
  	this.removeEvent.emit(rmObj);
  }
  childOnEdit(editObj){
  	this.editEvent.emit(editObj);
  }


}
