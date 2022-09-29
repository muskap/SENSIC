import { Component } from '@angular/core';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //data member definitions here...application level..
  public title:String = 'System Engineering Lab for Nanoscale Investigation and Control';
  public acronym:String = 'SENSIC';
  public static PIEmail:String = 'salap2@illinois.edu';
  public projectList: string[] = [];
  public princInvestigator:string;

  constructor(private dataService : DataServiceService) {
    //subscribe to the data reception event....
    this.princInvestigator = 'Prof. ';
    this.dataService.getPIData().subscribe((data) => {
      console.log(data);
      this.princInvestigator += data.firstName + ' '+ data.lastName;
    });

    //get the list of projects....
    this.dataService.getProjects().subscribe((data) => {
      console.log(data);
      this.projectList = data;
    });
  }
  
}
