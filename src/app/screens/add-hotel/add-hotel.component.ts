import { Component, OnInit } from '@angular/core';
import { HotelService} from './../../services/hotel.service'
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {

  constructor(
  		private HotelService: HotelService,
      private router:Router

  		) { }
  model={
  	hotel_name:"",
  	image:"",
  	address:"",
  	owner_image:"",
  	city:""
  }

  ngOnInit() {

  }
  	save(){
  	this.HotelService.addHotel({...this.model})
  					.subscribe(data => {
  						
  						this.model={
					  	hotel_name:"",
					  	image:"",
					  	address:"",
					  	owner_image:"",
					  	city:""
 						};
  					this.router.navigate(['hotel']);
  					})
  }
  

}
