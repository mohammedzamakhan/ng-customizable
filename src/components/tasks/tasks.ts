import { Component, View } from 'angular2/core';
import { CanActivate } from 'angular2/router';
import { AuthRouteHelper } from '../../modules/auth/auth-route-helper';
import { TaskStore } from '../../modules/task/task-store';
import { TaskForm } from './task-form/task-form';
import { TaskList } from './task-list/task-list';


@Component({
  moduleId: module.id,
  selector: 'tasks'
})

@View({
  directives: [
    TaskForm,
    TaskList
  ],
  templateUrl: './tasks.html'
})

@CanActivate(() => AuthRouteHelper.requireAuth())

export class Tasks {
  constructor(public taskStore: TaskStore) {}
}
