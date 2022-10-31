import { Component, Input, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-student-snippet',
  templateUrl: './student-snippet.component.html',
  styleUrls: ['./student-snippet.component.css']
})
export class StudentSnippetComponent implements OnInit {

  //data member definitions here....
  @Input() studentFName:string = '';
  @Input() studentLName:string = '';
  public studentEmail:string = '';
  public studentLevel:string = '';
  public studentDept:string = '';
  public studentWebsite:string = '';
  public studentLinkedin:string = "";
  public studentGithub:string = "";
  public studentImage:string = "";
  public images_base_path:string = "";
  
  constructor(private dataService: DataServiceService) {

  }

  ngOnInit(): void {

    this.images_base_path = this.dataService.getImagesBasePath();

    this.dataService.getStudent(this.studentFName, this.studentLName).subscribe((data) => {
      console.log(data);
      this.studentEmail = data.email;
      this.studentLevel = data.level;
      this.studentDept = data.department;
      this.studentWebsite = data.profiles.website;
      this.studentLinkedin = data.profiles.linkedin;
      this.studentGithub = data.profiles.github;
      this.studentImage =  this.images_base_path + "/"+ data.image_path;
      console.log(this.studentImage);
    });

  }

}
