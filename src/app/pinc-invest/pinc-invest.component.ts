import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-pinc-invest',
  templateUrl: './pinc-invest.component.html',
  styleUrls: ['./pinc-invest.component.css']
})
export class PincInvestComponent implements OnInit {

  private pi_details_path: string = 'assets/pi_description.json';
  public pi_data:any;
  public researchAreas: string[] = ["Control Systems","Optimization", "Optimal Control and Reinforcement Learning"];
  public teachingAreas: any[] = [
    {code:"ECE515", name:"Control System Theory and Design", link:"https://www.google.com"},
    {code:"ME360", name:"Signal Processing", link:"http://coecsl.ece.illinois.edu/me360/"},
    {code:"ME460", name:"Industrial Control Systems", link:"https://www.google.com"}
  ];
  public researchColor_rgb:string = "#ff0000";
  public teachingColor_rgb:string = "#ffeeee";

  constructor(private dataService: DataServiceService) {
    console.log("inside the constructor of princInvestigator component..")
    this.dataService.getPIData().subscribe(data => {
      console.log(data);
      this.pi_data = data;
    });

  }


  ngOnInit(): void {
  }

}
