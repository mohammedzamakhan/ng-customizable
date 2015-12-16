import { NgFor } from 'angular2/common';
import { Component, Input, View } from 'angular2/core';
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

  filterType: string;

  filter(type: string = null): void {
    this.filterType = type;
  }
}
