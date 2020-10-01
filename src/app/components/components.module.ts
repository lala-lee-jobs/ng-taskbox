import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { PureTaskListComponent } from './pure-task-list.component';

const components = [
    TaskComponent,
    PureTaskListComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule
  ],
  exports: [...components]
})
export class ComponentsModule { }