import { Component, OnInit } from '@angular/core';
// import { pi_details} from '../../assets/pi_description.json';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {

  //data member definitions here..
  public test:String = 'TestSting for the home';
  //define the array of images for the carousel...and their explanations...
  public carouselImages:any[]= [{src: '../../assets/testImage1.jfif', cap_head:'Group Picture', cap_sub: 'Group Picture'},
                                {src: '../../assets/testSlide.svg', cap_head:'Some Picture 1', cap_sub: 'Something here'},
  {src: '../../assets/testSlide.svg', cap_head:'Some Picture 2', cap_sub: 'something else entirely'}];

  //for now define the json pi_details jso filepath here..
  private pi_details_path: string = 'assets/pi_description.json';
  public pi_name:string = '';

  
  private _jsonURL = 'assets/pi_description.json';
  constructor(private http: HttpClient) {
    //subscribe to the data reception event....
    this.getJSON().subscribe(data => {
      console.log(data);
      this.pi_name = data.firstName + ' '+ data.lastName;
    });
  }
  public getJSON(): Observable<any> {
    return this.http.get(this.pi_details_path);
  }

  ngOnInit() {

    //initialization scripts here...

    //define the carousel cycling properties...
    // console.log("Principal Investigator details: ", );
    console.log('Loaded Home Page');

    var body = document.getElementsByTagName("body");
    console.log(body[0].scrollHeight > window.innerHeight);
  }

}
