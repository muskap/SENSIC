import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { PincInvestComponent } from './pinc-invest/pinc-invest.component';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { StudentsComponent } from './students/students.component';

var hero:any;
const pi_details_path = '../assets/pi_description.json'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'principal_investigator', component: PincInvestComponent, resolve:[
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      return (of(true)); 
    },
  ]},
  {path: 'students/current_students', component: StudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
