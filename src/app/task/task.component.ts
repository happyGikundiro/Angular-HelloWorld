import { Component } from '@angular/core';
import { COURSE } from '../db-data';
import { Course } from '../model/course';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
title = "Sample text";
name ="none";
email = "";
isSubmitted = false;
image = "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600";
courses:Course[] = COURSE

OnSubmit(): void{
  this.isSubmitted = true
}

ViewCard(){
  console.log("heloooooooo")
}
}
