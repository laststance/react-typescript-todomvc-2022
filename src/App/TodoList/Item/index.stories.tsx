import { ComponentMeta, ComponentStory } from "@storybook/react"
import Item from "."

export default {
  title: 'Components/TodoList/Item',
  component: Item,
}  as ComponentMeta<typeof Item>

export const Default: ComponentStory<typeof Item> = () =>
  <Item todo={{ id: '1', completed: false, bodyText: 'Test task'}} />

export const Completed: ComponentStory<typeof Item> = () =>
  <Item todo={{ id: '1', completed: true, bodyText: 'Test task'}} />
