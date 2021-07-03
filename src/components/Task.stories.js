import Task from './Task.vue'
import { action } from '@storybook/addon-actions'

export default {
  component: Task,
  excludeStories: /.*Data$/,
  title: 'Task',
  argTypes: {
    onPinTask: {},
    onArchiveTask: {},
  },
}

export const actionsData = {
  // action: StorybookのUIのアクションパネルに表示されるコールバックを作成
  onPinTask: action('pin-task'),
  onArchiveTask: action('archive-task'),
}

/**
 * 引数argsを用いてStorybookを再起動せずに、controlsアドオンを使用してコンポーネントをライブ編集できるようにします。一度args 値が変わると、コンポーネントも変わります。
 */
const Template = (args) => ({
  components: { Task },
  setup() {
    return { args, ...actionsData }
  },
  template: '<Task v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
}

export const Pinned = Template.bind({})
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
}

export const Archived = Template.bind({})
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
}
