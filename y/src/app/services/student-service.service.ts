import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

 student_Items= [];

  url="http://10.1.0.96:5000/GetAll";
  postStudent="http://10.1.0.96:5000/postStudent";
  
  constructor(private http:HttpClient) {}
  
    addStudent(data)
    {
      this.student_Items.push(data);

    }
 
  public  getDetails()
    {
      return this.http.get<any>(this.url)

    }

    public PostStudent(user) {
      return this.http.post<any>(this.postStudent, user, {});
    }
   
}
