// src/app/components/task.stories.ts
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { TaskComponent } from './task.component';
import { Task } from '../models/task.model';

export default {
  title: 'Task',
  excludeStories: /.*Data$/,
  argTypes: {
    state: {
        control: {
          type: 'inline-radio',
          options: ['Task_INBOX', 'TASK_PINNED', 'TASK_ARCHIVED'],
        },
    },
    updated_at: { control: 'date' }
  }  
};

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

export const taskData = {
  id: '1',
  title: 'Test Task',
  state: 'Task_INBOX',
  updated_at: new Date(2019, 0, 1, 9, 0),
};

const Template: Story<Task> = (args: Task) => ({
    component: TaskComponent,
    props: {
        task: args,
        onPinTask: actionsData.onPinTask,
        onArchiveTask: actionsData.onArchiveTask,
    }
});

export const Default = Template.bind({});
Default.args = taskData;

// Pinned Task State
export const Pinned = Template.bind({});
Pinned.args = Object.assign({}, taskData, {state: "TASK_PINNED"});

// Archived Task State
export const Archived = Template.bind({});
Archived.args = Object.assign({}, taskData, {state: "TASK_ARCHIVED"});
