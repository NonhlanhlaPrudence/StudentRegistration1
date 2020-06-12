import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {


  url="http://10.1.0.96:5000/GetAll";
  
  constructor(private http:HttpClient) {}

  public  getDetails()
    {
      return this.http.get<any>(this.url)

    }
   
}
