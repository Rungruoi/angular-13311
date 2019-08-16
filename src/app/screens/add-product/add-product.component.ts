import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {ProductService} from './../../services/product.service';
import {Validators ,FormGroup,FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

 
  constructor( 
    
    private ProductService : ProductService,
  	private route: ActivatedRoute,
  	private router:Router
  	) { }
    model = new FormGroup({
    'name': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
    'image': new FormControl('', [
        Validators.required,
       ]),
    'price':new FormControl('',[
      Validators.required,
      Validators.min(1),
      Validators.pattern('[0-9]{2,6}')

      ]),
    'detail':new FormControl('',[
      Validators.required,
      Validators.minLength(10)
      ])
  });
    cateid:string;
  ngOnInit() {
    this.cateid=this.route.snapshot.params.cateid;
  }

  get name() { return this.model.get('name'); }
  get image() { return this.model.get('image'); }
  get price() { return this.model.get('price'); }
  get detail() { return this.model.get('detail'); }

  save(){
    if(this.model.valid){
      this. ProductService.addProduct(this.cateid,this.model.value)
      .subscribe(data=>{
        this.model.value.name=""
        this.model.value.image=""
        this.model.value.price=""
        this.model.value.detail=""
      this.router.navigate(['/cate-detail/'+this.cateid]);
      })
    }else{
    this.validateAllFormFields(this.model); //{7}

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
