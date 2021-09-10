import { render } from '@testing-library/react'

import ErrorBoundary from './ErrorBoundary'

test('should be render fallback page Error was thrown', () => {
  const InvalidComponent = () => undefined
  const screen = render(
    <ErrorBoundary>
      <InvalidComponent />
    </ErrorBoundary>
  )
  expect(screen.getByText('Something Error Ooccurring')).toBeInTheDocument()
})
