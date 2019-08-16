import { Component, OnInit } from '@angular/core';
// import {DetailComponent} from './components/detail/detail.component';
import {CategoryService} from './services/category.service';
import {ProductService} from './services/product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private cateService: CategoryService,

    private productService: ProductService

    ){

  }
   
 /* newstuden = {
    id:0,
    name: "",
    age:0,
    avatar: ""
  }

  // thuc hien hien thi danh sach
  // them/sua/xoa thong tin cua cac students

  s

  save = () => {
    if(this.newstuden.id == 0){
      this.newstuden.id = this.getNewId();
      this.students.push({...this.newstuden});
    }else{
      var index = this.students.map(
                      (h) => h.id 
                    ).indexOf(this.newstuden.id);
      this.students[index] = {...this.newstuden};
    }
    this.clear();
  }

 

  update = (studen) => {
    this.newstuden = {...studen};
  }


  private getNewId = () => {
    // tim so id lon nhat
      let maxId = 0;
      for (var i = 0; i < this.students.length; ++i) {
        if(this.students[i].id >= maxId){
          maxId = this.students[i].id
        }
      }
      return maxId+1;
  }

  // arrow function 
  

  keyupstudentName = (event) => {
    if(event.keyCode === 13){
      
      // tao hero moi
      let item = {
        id: this.getNewId(),
        name: event.target.value, 
        age: event.target.value,
        avatar:event.target.value
      }

      // add hero moi vao mang
      this.students.push(item);
      // lam trong the input
      event.target.value = "";
    }
  }
// xóa học sinh
  remove = (StudenId) =>{
    this.students= this.students.filter(
      (remo)=>remo.id != StudenId)
  }

*/

}







