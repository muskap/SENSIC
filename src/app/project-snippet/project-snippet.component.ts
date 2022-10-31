import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-snippet',
  templateUrl: './project-snippet.component.html',
  styleUrls: ['./project-snippet.component.css']
})
export class ProjectSnippetComponent implements OnInit {

  public paperList:any[] = [
    {title: "Paper 1", author:"Someone", link: "http://salapaka.web.engr.illinois.edu/resume_Salapaka.pdf"},
    {title: "Paper 2", author:"Someone", link: "http://salapaka.web.engr.illinois.edu/resume_Salapaka.pdf"},
    {title: "Paper 2", author:"Someone", link: "http://salapaka.web.engr.illinois.edu/resume_Salapaka.pdf"},
  ]
  @Input() title:any; // decorate the property with @Input()
  @Input() activeProject:any;

  constructor() { }

  ngOnInit(): void {
  }

}
