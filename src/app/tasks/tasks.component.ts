import {Component, input} from '@angular/core';
import {TaskComponent} from "./task/task.component";

import {NewTaskComponent} from "./new-task/new-task.component";
import {NewTask} from "./new-task/new-task.model";
import {TasksService} from "./tasks.service";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NewTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  name = input.required<string>();
  userId = input.required<string>();
  isAddingTask = false;

  constructor(private tasksService: TasksService) {  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId());
  }

  addStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
