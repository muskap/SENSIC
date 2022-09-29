import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  //define data members here
  private pi_details_path: string = "assets/pi_description.json";
  private project_list_path: string = "assets/content/project_list.json"

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


}
