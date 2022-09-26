import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //data member definitions here...application level..
  public title:String = 'System Engineering Lab for Nanoscale Investigation and Control';
  public acronym:String = 'SENSIC';
  public princInvestigator:String = 'Prof. Srinivasa Salapaka'
  public static PIEmail:String = 'salap2@illinois.edu';
  public projectList: string[] = ['Combinatorial optimization of Networks', "Atomic Force Microscope Control", "Facility location and path optimization"];

  
}
