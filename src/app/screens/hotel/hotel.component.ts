import { Component, OnInit } from '@angular/core';
import { HotelService} from './../../services/hotel.service'

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  constructor(
  	private HotelService: HotelService )
  	 { }

  ngOnInit() {
  	 this.HotelService.getList().subscribe((data)=>{
      this.hotel = data;
  });
  }
  hotel=[];

  removeHotel(hote){
    this.HotelService.removeHotel(hote.id)
        .subscribe((data) => {
  		console.log(data);
          this.hotel = this.hotel.filter(
            (item) => item.id != hote.id
          )
        });
  } 

}
