import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
// import { pi_details} from '../../assets/pi_description.json';

import { HttpClient } from '@angular/common/http';
import { interval, Observable, timeout } from 'rxjs';
import { DataServiceService } from '../data-service.service';

import $ from "jquery";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit, AfterViewInit {

  //data member definitions here..
  //define the array of images for the carousel...and their explanations...
  public carouselImages:any[]= [{src: 'group_pic_2022.jpg', cap_head:'Group Picture 2022', cap_sub: ''},
                                {src: 'testSlide.svg', cap_head:'Some Picture 1', cap_sub: ''},
                                {src: 'testSlide.svg', cap_head:'Some Picture 2', cap_sub: ''}];
  public pi_data:any;
  public pi_imgSrc:string = "../../assets/content/Salapaka_Srinivasa.jpg";
  public images_base_path:string = "";
  
  private _jsonURL = 'assets/pi_description.json';

  @ViewChild('addressTarget') addressTarget: any;

  constructor(private dataService : DataServiceService) {

    this.dataService.getPIData().subscribe(data => {
      console.log(data);
      this.pi_data = data;
    });

    //also get the base path for the images from the data service..
    this.images_base_path = this.dataService.getImagesBasePath();

  }

  ngAfterViewInit() {
    console.log('AddressTarget on Home Page')  
    console.log(this.addressTarget.nativeElement);

    var test:HTMLElement | null = document.getElementById('addressTarget');
    console.log(test);
    // this.scroll(test);

  }

  ngOnInit() {

    //initialization scripts here...

    //define the carousel cycling properties...
    // console.log("Principal Investigator details: ", );
    console.log('Loaded Home Page');

    var body = document.getElementsByTagName("body");
    console.log(body[0].scrollHeight > window.innerHeight);

    //try scrolling to the address
    // console.log(this.addressTarget);
    // this.scroll(this.addressTarget);

  }

  public scroll(el: HTMLElement|null) {
    el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

}
