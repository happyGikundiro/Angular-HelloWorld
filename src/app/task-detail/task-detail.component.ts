import { Component, Input } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css'
})
export class TaskDetailComponent {
  @Input() courses!: Course[];
}
