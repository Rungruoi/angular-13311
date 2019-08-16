import { Component, OnInit } from '@angular/core';
import {CategoryService} from './../../services/category.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {Validators ,FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-cate',
  templateUrl: './add-cate.component.html',
  styleUrls: ['./add-cate.component.css']
})
export class AddCateComponent implements OnInit {

  constructor( private cateService: CategoryService,

              private router :Router 
               ) 
  { }
  model = new FormGroup(
  {
    name:new FormControl('',[
     Validators.required,
     Validators.minLength(4)
     ]),
    avatar:new FormControl('',[
      Validators.required
      ])
  });
  ngOnInit() {

  }
  get name(){ return this.model.get('name');}
  get avatar(){ return this.model.get('avatar');}
  save(){
   if(this.model.valid){
     this.cateService.addCategory(this.model.value)
     .subscribe(data => {
      this.model.value.name = ""               
      this.model.value.avatar = ""             
      this.router.navigate(['/']);              
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
