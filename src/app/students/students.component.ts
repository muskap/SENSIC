import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  //data member definition...
  public student_list:any[] = [];
  
  constructor(private dataService:DataServiceService){

    this.dataService.getStudents().subscribe((data) => {
      console.log(data);
      this.student_list = data;
    });
  }

  ngOnInit(): void {
  }

}
