import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskformComponent } from "./taskform/taskform.component";
import { TaskitemComponent } from "./taskitem/taskitem.component";
import { TasklistComponent } from "./tasklist/tasklist.component";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskformComponent, TaskitemComponent, TasklistComponent,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  currentComponent:string="tasklist";
  title: any;
    changeTab(tabname:string)
    {
      this.currentComponent=tabname;

   }
}
