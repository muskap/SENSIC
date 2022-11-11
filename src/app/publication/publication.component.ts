import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {

  public paper_list:any[] = [];
  public currYear: any = (new Date()).getFullYear();
  public filt_paper_list:any[] = [];
  public startYear:any = {};
  public endYear:any = {};
  
  constructor(private dataService: DataServiceService) {

    this.dataService.getPapers().subscribe(data => {
      console.log("Papers:", data);
      this.paper_list = data;
      this.startYear = this.currYear; this.endYear = this.currYear;
      this.filterPapersByYear(this.currYear, this.currYear);
    });

  }

  ngOnInit(): void {
  }

  //user can filter the papers that belong in a particular range of years.
  public filterPapersByYear(startYear:any, endYear: any): void{

    // console.log('testMessage in filterPapers');
    this.startYear = startYear;
    this.endYear = endYear;
    this.filt_paper_list =  this.paper_list.filter(x => (x.year >= startYear)&&(x.year <= endYear));

  }

}
