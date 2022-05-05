import { ComponentMeta, ComponentStory } from "@storybook/react"
import App from "."

export default {
  title: 'Pages/App',
  component: App,
}  as ComponentMeta<typeof App>

export const All: ComponentStory<typeof App> = () => <App path={"/"} />

export const Active: ComponentStory<typeof App> = () => <App path={"/active"} />

export const Completed: ComponentStory<typeof App> = () => <App path={"/completed"} />
