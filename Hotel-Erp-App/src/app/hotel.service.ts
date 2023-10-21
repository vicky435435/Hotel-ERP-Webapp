import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hotels } from './hotels';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Hotels[]> {
    return this.http.get<Hotels[]>("http://localhost:3000/Hotels");
  }

  createHotels(payload:Hotels):Observable<Hotels>{
    return this.http.post<Hotels>("http://localhost:3000/Hotels", payload)
  }

  getbyId(id:number):Observable<Hotels>{
    return this.http.get<Hotels>(`http://localhost:3000/Hotels/${id}`);
  }

  updateHotels(payload:Hotels):Observable<Hotels>{
    return this.http.put<Hotels>(`http://localhost:3000/Hotels/${payload.id}`,payload)
  }

  deleteHotels(id:number){
    return this.http.delete(`http://localhost:3000/Hotels/${id}`)
  }


  
}
