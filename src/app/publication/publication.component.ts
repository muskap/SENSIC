import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {

  public paper_list:any[] = [];
  
  constructor(private dataService: DataServiceService) {

    this.dataService.getPapers().subscribe(data => {
      console.log("Papers:", data);
      this.paper_list = data;
    });

  }

  ngOnInit(): void {
  }

}
