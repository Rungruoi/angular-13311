import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {ProductService} from './../../services/product.service';
import {CategoryService} from './../../services/category.service';
import {Validators ,FormGroup,FormControl } from '@angular/forms';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(
    private cateService: CategoryService,
    private proService: ProductService,
    private route:ActivatedRoute,
    private router:Router
    ) { }

  model= new FormGroup({
    id:new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    image:new FormControl('',[Validators.required]),
    price:new FormControl('',[Validators.required,Validators.min(1),Validators.pattern('[0-9]{2,6}')]),
    detail:new FormControl('',[Validators.required,Validators.minLength(10)])

  });
  category=[];

  get name(){ return this.model.get('name');}
  get image(){ return this.model.get('image');}
  get price(){ return this.model.get('price');}
  get detail(){ return this.model.get('detail');}
  cateid:string;
  ngOnInit() {
  	this.cateid=this.route.snapshot.paramMap.get('cateid');
    let id=this.route.snapshot.params.id;
       this.cateService.getCategoryList().subscribe((data)=>{
      this.category = data;
    });
    this.proService.getProduct(this.cateid,id).subscribe((data)=>{
      this.model.setValue({
        
        id:data.id,
        name:data.name,
        image:data.image,
        price:data.price,
        detail:data.detail
      }) 
    });
  }
  saveEditproduct(){
    if(this.model.valid){
     this.proService.updateProduct(this.cateid,this.model.value.id,this.model.value)
     .subscribe(data => {
      console.log(this.model.value);
      this.model.value.name="",
      this.model.value.image="",
      this.model.value.price="",
      this.model.value.detail=""
      this.router.navigate(['/cate-detail/'+this.cateid]);
    })
   }else{
    this.validateAllFormFields(this.model);

  }
}
  validateAllFormFields(formGroup: FormGroup) {         //{1}
  Object.keys(formGroup.controls).forEach(field => {  //{2}
  const control = formGroup.get(field);             //{3}
  if (control instanceof FormControl) {             //{4}
    control.markAsTouched({ onlySelf: true });
} else if (control instanceof FormGroup) {        //{5}
this.validateAllFormFields(control);            //{6}
}
});
}
}
