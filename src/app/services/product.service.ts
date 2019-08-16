
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private productApiUrl='http://5d2c2c7a8c900700149720f3.mockapi.io/categories';

  getProductList(cateId){
  		return this.http.get<any>(`${this.productApiUrl}/${cateId}/products`);

  }
  removeProduct(cateId,Id){
  	let removeProductUrl = `${this.productApiUrl}/${cateId}/products/${Id}`;
  	return this.http.delete<any>(removeProductUrl);
  }
  getProduct(cateId,Id){
    return this.http.get<any>(`${this.productApiUrl}/${cateId}/products/${Id}`);
  }
  updateProduct(cateId,Id,data){
      return this.http.put<any>(`${this.productApiUrl}/${cateId}/products/${Id}`,data);
    }
  addProduct(cateId,data){
      return this.http.post<any>(`${this.productApiUrl}/${cateId}/products`,data);
    }

}
