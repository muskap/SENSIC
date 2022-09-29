import { Component, OnInit } from '@angular/core';
// import { pi_details} from '../../assets/pi_description.json';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataServiceService } from '../data-service.service';

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

  
  private _jsonURL = 'assets/pi_description.json';
  constructor(private dataService : DataServiceService) {
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
