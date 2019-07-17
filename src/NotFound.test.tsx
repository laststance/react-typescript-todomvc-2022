import React from 'react'
import { render } from '@testing-library/react'
import { NotFound } from './NotFound'

test('it render certain message without crash', () => {
  const { getAllByText } = render(<NotFound />)
  expect(getAllByText('Page Not Found')).toBeTruthy()
})
