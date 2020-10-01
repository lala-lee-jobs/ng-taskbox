// src/app/components/pure-inbox-screen.stories.ts

import { moduleMetadata } from '@storybook/angular';
import { PureInboxScreenComponent } from './pure-inbox-screen.component';
import { TaskModule } from './task.module';
import { Store, NgxsModule } from '@ngxs/store';
import { TasksState } from '../state/task.state';

export default {
  title: 'PureInboxScreen',
  decorators: [
    moduleMetadata({
      imports: [TaskModule, NgxsModule.forRoot([TasksState])],
      providers: [Store],
    }),
  ],
};
// inbox screen default state
export const Default = () => ({
  component: PureInboxScreenComponent,
});

// inbox screen error state
export const error = () => ({
  component: PureInboxScreenComponent,
  props: {
    error: true,
  },
});