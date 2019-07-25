import { Component, OnInit , Input,Output, EventEmitter} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {ProductService} from './../../services/product.service';
@Component({
  selector: 'app-cate-detail',
  templateUrl: './cate-detail.component.html',
  styleUrls: ['./cate-detail.component.css']
})
export class CateDetailComponent implements OnInit {


  constructor(

    private proService: ProductService,
    private route:ActivatedRoute,
    private router:Router
    ) 
  {
     
   }
  //id="0";
  ngOnInit() {
   this.id=this.route.snapshot.params.id;
    this.proService.getProductList(id).subscribe((data)=>{
      this.product = data;
    });
  }
  product=[];

}
