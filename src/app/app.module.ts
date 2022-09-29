import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PincInvestComponent } from './pinc-invest/pinc-invest.component';
import { StudentsComponent } from './students/students.component';
import { StudentSnippetComponent } from './student-snippet/student-snippet.component';
import { ProjectComponent } from './project/project.component';
import { ProjectSnippetComponent } from './project-snippet/project-snippet.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PincInvestComponent,
    StudentsComponent,
    StudentSnippetComponent,
    ProjectComponent,
    ProjectSnippetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
