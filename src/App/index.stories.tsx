import { ComponentMeta, ComponentStory } from "@storybook/react"
import { RecoilRoot } from "recoil"

import '../index.css'
import App from "."

export default {
  title: 'Todo/App',
  component: App,
}  as ComponentMeta<typeof App>;

export const All: ComponentStory<typeof App> = () => {
  return (
    <RecoilRoot>
      <App path={"/"}></App>
    </RecoilRoot>
  )
}

export const Active: ComponentStory<typeof App> = () => {
  return (
    <RecoilRoot>
      <App path={"/active"}></App>
    </RecoilRoot>
  )
}

export const Completed: ComponentStory<typeof App> = () => {
  return (
    <RecoilRoot>
      <App path={"/completed"}></App>
    </RecoilRoot>
  )
}
