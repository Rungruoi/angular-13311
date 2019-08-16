import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {CategoryService} from './../../services/category.service';
import {Validators ,FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-edit-cate',
  templateUrl: './edit-cate.component.html',
  styleUrls: ['./edit-cate.component.css']
})
export class EditCateComponent implements OnInit {

  constructor(
    private cateService: CategoryService,
    private route:ActivatedRoute,
    private router:Router
    ) 
  	{ }
 
  	model = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    avatar: new FormControl('',[Validators.required])
  });
      get name() { return this.model.get('name'); }
      get avatar() { return this.model.get('avatar'); }
 ngOnInit() {
    let cateId = this.route.snapshot.params.id;
    this.cateService.getCategory(cateId)
    .subscribe(data => {
      console.log(data);
      this.model.setValue({
        id: data.id,
        name: data.name,
        avatar: data.avatar
      })
    });
  }
	
  saveEdit(){
    if(this.model.valid){
      this.cateService.updateCategory(this.model.value.id,this.model.value)
      .subscribe(data => {
        console.log(this.model.value.id);
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
