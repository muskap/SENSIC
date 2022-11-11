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
  public news_items:any[] = [];
  public images_base_path:string = "";
  
  private _jsonURL = 'assets/pi_description.json';

  @ViewChild('addressTarget') addressTarget: any;

  constructor(private dataService : DataServiceService) {

    this.dataService.getPIData().subscribe(data => {
      console.log(data);
      this.pi_data = data;
    });

    //now get the news items from the dataservice and set it to the news_items object
    this.dataService.getNewsItems().subscribe(data => {
      data.sort((a:any, b:any) => {
        var da:Date = new Date(a.news_date);
        // console.log(da);
        var db:Date = new Date(b.news_date);
        // console.log(Math.abs(new Date('2011/10/09 12:00').getTime() - new Date('2011/10/09 00:00').getTime()));
        var res = db.getTime() - da.getTime();
        return res;
      });
      // console.log(data);
      this.news_items = data;
      console.log("News Items: ", data);
      console.log($('.carousel .carousel-item'));
    });

    //also get the base path for the images from the data service..
    this.images_base_path = this.dataService.getImagesBasePath();

  }

  //define function to set up the rolling news....
  private newsSetup(): void{

    let items  = document.querySelectorAll('.carousel .carousel-item');
    console.log(items);
    items.forEach(el => {
      // console.log(el);
      let next = el.nextElementSibling;
      for(var i=1; i < 6; i++){
        if(!next){
          next = items[0];
        }
        let cloneChild = next.cloneNode(true);
        // console.log('Next One:', cloneChild.childNodes[0])
        el.appendChild(cloneChild.childNodes[0]);
        next = next.nextElementSibling;
      }
    });

  }

  ngAfterViewInit() {
    console.log('AddressTarget on Home Page')  
    console.log(this.addressTarget.nativeElement);

    var test:HTMLElement | null = document.getElementById('addressTarget');
    console.log(test);
    // this.scroll(test);

    let items = document.querySelectorAll('.carousel .carousel-item');
    console.log(items);
    setTimeout(() => {
      console.log('Hello world');
      // let items = document.querySelectorAll('.carousel .carousel-item');
      // console.log(items);
      this.newsSetup();
    }, 1000);

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
