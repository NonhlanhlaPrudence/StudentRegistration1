import { Component, OnInit, Input } from '@angular/core';
import { StudentServiceService } from '../services/student-service.service';
import { ActivatedRoute } from '@angular/router';
import {FormsModule, EmailValidator} from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public name:string;
  public email:string;
  public id:number;
  public modules:string;
  public dateRegistered:Date;
  public dateModified:Date;

  public rows:Array<{ name:string;
  email:string;
  id:number;
  modules:string;
  dateRegistered:Date;
  dateModified:Date}> = [];

  buttonClicked()
  {
    this.rows.push({ name: this.name, email: this.email, id: this.id, modules: this.modules, dateRegistered: this.dateRegistered, dateModified: this.dateModified});
  }
  dateMessage: string;

@Input() studentData = {
  id: " ", message: " "

}
  constructor(private service: StudentServiceService ,
            private route: ActivatedRoute){
              let dateRegistered= new Date();
              this.dateMessage = dateRegistered.toDateString() + ' ' + dateRegistered.toLocaleDateString();
   }

   studentRegistration() {
    this.service.PostStudent(this.studentData).subscribe(
      data =>
        console.log(data));
    console.log(this.studentData.message);
  }
  student_data:Array<any> =
  [{

    name: this.name, email: this.email, id: this.id, modules: this.modules, dateRegistered: this.dateRegistered, dateModified: this.dateModified
  }];
  student_info:Array<any> =
  [{

    name: this.name, email: this.email, id: this.id, modules: this.modules, dateRegistered: this.dateRegistered, dateModified: this.dateModified
  }];

  remove(id: any) {
    this.student_data.push(this.student_info[id]);
    this.student_info.splice(id, 1);
  }
  
  
  ngOnInit():void{ 
this.studentRegistration();
  }

}
