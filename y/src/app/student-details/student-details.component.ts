import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../services/student-service.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  details:any;

  constructor(private service:StudentServiceService) { }

getData()
{
    this.service.getDetails().subscribe((data)=> {console.log(data)
      this.details = data
    })

    
  }

  ngOnInit(): void {
   this.getData();
  }

}
