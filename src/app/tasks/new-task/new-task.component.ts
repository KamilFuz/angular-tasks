import {Component, inject, input, output, signal} from '@angular/core';
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  userId = input.required<string>();
  close = output();
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');

  private tasksService = inject(TasksService);
  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({summary: this.enteredSummary(), date: this.enteredDate(), title: this.enteredTitle()}, this.userId())
    this.close.emit();
  }
}
