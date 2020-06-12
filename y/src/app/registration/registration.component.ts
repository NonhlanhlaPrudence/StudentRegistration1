import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../services/student-service.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

      studentArray= [];  
      newDynamic: any = {}; 

  constructor(private service: StudentServiceService) { 

  }
  ngOnInit(): void
  {

  }

}
