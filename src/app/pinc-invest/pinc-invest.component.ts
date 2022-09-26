import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    {code:"ME360", name:"Signal Processing", link:"https://www.google.com"},
    {code:"ME460", name:"Industrial Control Systems", link:"https://www.google.com"}
  ];
  public researchColor_rgb:string = "#ff0000";
  public teachingColor_rgb:string = "#ffeeee";

  constructor(private http: HttpClient) {
    console.log("inside the constructor of princInvestigator component..")
    this.getJSON().subscribe(data => {
      console.log(data);
      this.pi_data = data;
    });

  }

  public getJSON():Observable<any>{

    //send the ajax request to the pi_details path and return the observable object to the caller....
    return (this.http.get(this.pi_details_path));

  }

  ngOnInit(): void {
  }

}
