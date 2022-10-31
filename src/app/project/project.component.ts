import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public projectList:any[] = [];
  public activeProject:any = undefined;
  @ViewChild('search') searchElement: any;
  
  constructor(private dataService: DataServiceService, private router: ActivatedRoute) { 

    //get the list of projects....
    this.dataService.getProjects().subscribe((data) => {
      console.log(data);
      this.projectList = data;
    });

  }

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      console.log("Parameters from Project: ", params);
      this.activeProject = params.get('project_link_name');
      console.log(this.activeProject);
      
    });

  }

  //function to filter out the items
  filterActiveProject(){
    return this.projectList.filter(x => x.link_name == this.activeProject);
  }
  filterInactiveProjects(){
    return this.projectList.filter(x => x.link_name != this.activeProject);
  }

  //function to make a project active
  public activateProject(projectLinkName:string):void{
    console.log("Activating project:", projectLinkName );
    this.activeProject = projectLinkName;
    setTimeout(()=>{ // this will make the execution after the above boolean has changed
      this.searchElement.nativeElement.focus();
    },0);
  }

  public deactivateProject():void{
    console.log("deActivating project:", this.activeProject );
    this.activeProject = undefined;
  }

  public toggleActive(projectLinkName:string, event:any, validClick:boolean=false):void{
    console.log("Toggling project:", projectLinkName );
    if((!this.activeProject)||(this.activeProject != projectLinkName)){
      this.activeProject = projectLinkName;
    }else if((validClick)){ //(this.activeProject == projectLinkName)&&
      this.activeProject = undefined;
    }
    console.log(event);
  }

}
