import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, AfterViewInit {

  public news_items:any[] = [];
  public images_base_path:string = "";
  
  constructor(private dataService : DataServiceService) {

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
  
  
  ngAfterViewInit(): void {
    let items = document.querySelectorAll('.carousel .carousel-item');
    console.log(items);
    setTimeout(() => {
      console.log('Hello world');
      // let items = document.querySelectorAll('.carousel .carousel-item');
      // console.log(items);
      this.newsSetup();
    }, 1000);
  }

  ngOnInit(): void {
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

}
