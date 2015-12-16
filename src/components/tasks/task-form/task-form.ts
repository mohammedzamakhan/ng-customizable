import { FORM_DIRECTIVES } from 'angular2/common';
import { Component, View } from 'angular2/core';
import { TaskService } from '../../../modules/task/task-service';


@Component({
  moduleId: module.id,
  selector: 'task-form'
})

@View({
  directives: [
    FORM_DIRECTIVES
  ],
  styleUrls: ['./task-form.css'],
  templateUrl: './task-form.html'
})

export class TaskForm {
  title: string = '';

  constructor(private taskService: TaskService) {}

  clear(): void {
    this.title = '';
  }

  submit(): void {
    const title: string = this.title.trim();
    if (title.length) {
      this.taskService.createTask(title);
    }
    this.clear();
  }
}
