import React from 'react'
import { render, screen } from '@testing-library/react'
import ErrorBoundary from './ErrorBoundary'

import '@testing-library/jest-dom'

test('should be render fallback page Error was thrown', () => {
  const InvalidComponent = () => undefined
  render(
    <ErrorBoundary>
      <InvalidComponent />
    </ErrorBoundary>
  )
  expect(screen.getByText('Something Error Ooccurring')).toBeInTheDocument()
})
