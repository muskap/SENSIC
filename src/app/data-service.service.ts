import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  //define data members here
  private pi_details_path: string = "assets/pi_description.json";
  private project_list_path: string = "assets/content/project_list.json";
  private news_list_path: string = "assets/content/news_list.json";
  private images_base_path: string ="../../assets/content";
  private student_info_base_path:string = "../../assets/content";
  private paper_list_path:string = "assets/content/paper_list.json";

  constructor(private http: HttpClient) { }

  //user can get the pi details from the json file....
  public getPIData(): Observable<any>{
    
    return this.http.get(this.pi_details_path);
    // return of("not done yet");

  }

  //user can get the projects list from the json file..
  public getProjects():Observable<any> {

    return this.http.get(this.project_list_path);
    // return of("not yet implemented getProjects");
  }

  //define a function to get the list of news items form assets,
  public getNewsItems(): Observable<any>{
    return this.http.get(this.news_list_path);
  }

  //user can get the base path for the images
  public getImagesBasePath():string{
    return this.images_base_path;
  }

  //user can get the list of students..
  public getStudents():Observable<any>{
    return this.http.get(this.student_info_base_path + "/student_list.json");
  }

  //user can data for a particualar student...
  public getStudent(firstName:string, lastName:string):Observable<any>{

    if(firstName && lastName){
      return this.http.get(this.student_info_base_path + "/"+ lastName + "_" + firstName + ".json");
    }else{
      return of();
    }

  }

  //user can get the list of papers..
  public getPapers():Observable<any>{
    return this.http.get(this.paper_list_path);
  }


}
