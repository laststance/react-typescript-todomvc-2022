import React from 'react'
import { render } from '@testing-library/react'
import ErrorBoundary from './ErrorBoundary'

import '@testing-library/jest-dom/extend-expect'

test('shlould render fallback page when react take undefined as a node', () => {
  const WrongComponent = () => undefined
  const { getByTestId } = render(
    <ErrorBoundary>
      <WrongComponent />
    </ErrorBoundary>
  )
  expect(getByTestId('error-boundary-fallback-component')).not.toBeNull()
  expect(getByTestId('error-boundary-fallback-component')).toHaveTextContent(
    'Something Error Ooccurring'
  )
})
