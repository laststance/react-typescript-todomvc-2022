import { ComponentMeta, ComponentStory } from "@storybook/react"
import { userEvent, within } from '@storybook/testing-library'
import Item from "."

export default {
  title: 'Components/TodoList/Item',
  component: Item,
}  as ComponentMeta<typeof Item>

const Template: ComponentStory<typeof Item> = (args) => <Item {...args} />

export const Default = Template.bind({});
Default.args = {
  todo: { id: '1', completed: false, bodyText: 'Test task' }
}

export const Editing = Template.bind({});
Editing.args = {
  todo: { id: '1', completed: false, bodyText: 'Test task' }
}
Editing.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByTestId('todo-body-text'));
}

export const Completed = Template.bind({});
Completed.args = {
  todo: { id: '1', completed: true, bodyText: 'Test task' }
}
