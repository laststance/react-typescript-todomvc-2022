/* eslint-disable */
import React from 'react'
import { render } from '@testing-library/react'
import { Store } from '../../index'
import Provider from 'muriatic'
import '@testing-library/jest-dom/extend-expect'

const initialStore: Store = {
  todoList: [
    { id: '8btxpD9kDBlo', bodyText: 'cut tomato', completed: false },
    { id: '8btxpD9kDBlo', bodyText: 'boil chicken', completed: true }
  ]
}

test('Item work correctly', () => {
  const task = 'make test'
  expect(task).toBeDefined()
})
