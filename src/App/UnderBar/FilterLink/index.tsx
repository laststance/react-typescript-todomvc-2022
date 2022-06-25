import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const FilterLink: React.FC = () => {
  const { pathname } = useLocation()
  return (
    <ul className="filters">
      <li>
        <Link
          data-cy="all-filter"
          className={pathname === '/' ? 'selected' : ''}
          to="/"
        >
          All
        </Link>
      </li>
      <li>
        <Link
          data-cy="active-filter"
          className={pathname === '/active' ? 'selected' : ''}
          to="/active"
        >
          Active
        </Link>
      </li>
      <li>
        <Link
          data-cy="completed-filter"
          className={pathname === '/completed' ? 'selected' : ''}
          to="/completed"
        >
          Completed
        </Link>
      </li>
    </ul>
  )
}

export default FilterLink
