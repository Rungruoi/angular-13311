import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private productApiUrl='http://5d2c2c7a8c900700149720f3.mockapi.io/categories';

  getProductList(id){
  	let listProductUrl='${this.productApiUrl}/${id}/products';
  	return this.http.get<any[]>(this.listProductUrl);
  }
  removeProduct(cateId,Id){
  	let removeProductUrl = `${this.productApiUrl}/${cateId}/products/${Id}`;
  	return this.http.delete<any>(removeProductUrl);
  }

}
