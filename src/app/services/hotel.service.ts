import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }
  private hotelApiUrl='http://5d2c2c7a8c900700149720f3.mockapi.io/hotel';

	
  getList() : Observable<any>{
    return this.http.get<any[]>(this.hotelApiUrl);
  }

 	removeHotel(Id){
  	let removeUrl = `${this.hotelApiUrl}/${Id}`;
  	return this.http.delete<any>(removeUrl);
 	 }
 	updateHotel(id,data){
  		return this.http.put<any>(`${this.hotelApiUrl}/${id}`,data);
  	}
  	getHotel(hotelId){
  		return this.http.get<any>(`${this.hotelApiUrl}/${hotelId}`);
  	}
 	addHotel(data){
      return this.http.post<any>(this.hotelApiUrl,data);
    }
}
