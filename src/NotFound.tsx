import type { RouteComponentProps } from '@reach/router'
import React from 'react'

const css: React.CSSProperties = {
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  width: '100%',
}

export const NotFound: React.FC<RouteComponentProps> = () => (
  <div data-cy="not-found-page" style={css}>
    <h1>Page Not Found</h1>
  </div>
)
