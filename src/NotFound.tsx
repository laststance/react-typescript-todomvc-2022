import React from 'react'
import { RouteComponentProps } from '@reach/router'

const NotFound: React.FC<RouteComponentProps> = props => (
  <div data-cy="not-found-page" style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} /* eslint-disable-line prettier/prettier */>
    <h1>Page Not Found</h1>
  </div>
)

export default NotFound
