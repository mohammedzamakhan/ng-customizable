import { NgFor } from 'angular2/common';
import { Component, Input, View } from 'angular2/core';
import { RouterLink, RouteParams } from 'angular2/router';
import { List } from 'immutable';
import { ReplaySubject } from 'rxjs/subject/ReplaySubject';
import { TaskItem } from '../task-item/task-item';
import { TaskListFilterPipe } from './task-list-filter-pipe';


@Component({
  moduleId: module.id,
  selector: 'task-list'
})

@View({
  directives: [
    NgFor,
    RouterLink,
    TaskItem
  ],
  pipes: [
    TaskListFilterPipe
  ],
  styleUrls: ['./task-list.css'],
  templateUrl: './task-list.html'
})

export class TaskList {
  @Input() tasks: ReplaySubject<List<any>>;

  filter: string;

  constructor(params: RouteParams) {
    this.filter = params.get('filter');
  }
}
