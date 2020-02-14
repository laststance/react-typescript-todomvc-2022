import React from 'react'
import { render } from '@testing-library/react'
import { NotFound } from './NotFound'

test('<NotFound /> should render Page Not Found message', () => {
  const { getAllByText } = render(<NotFound />)
  expect(getAllByText('Page Not Found')).toBeTruthy()
})
