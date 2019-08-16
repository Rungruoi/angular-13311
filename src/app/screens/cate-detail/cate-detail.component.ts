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
    { }

  
  cateid:string;
  ngOnInit() {
   this.cateid=this.route.snapshot.paramMap.get('cateid');
   this.proService.getProductList(this.cateid).subscribe((data)=>{
    this.product = data; 
    });
   
  
  }
    product=[];

  removeProduct(pro){

    this.proService.removeProduct(this.cateid,pro.id).subscribe((data)=> {
      console.log(data);
      this.product=this.product.filter((item)=>item.id !=pro.id);
     this.router.navigate(['cate-detail'+ this.cateid]);
         
    });
  }
    
}
