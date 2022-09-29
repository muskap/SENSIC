import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public projectList:string[] = [];
  
  constructor(private dataService: DataServiceService) { 

    //get the list of projects....
    this.dataService.getProjects().subscribe((data) => {
      console.log(data);
      this.projectList = data;
    });

  }

  ngOnInit(): void {
  }

}
