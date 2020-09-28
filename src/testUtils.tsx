import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { AppState, initialAppState } from './dataStructure'

interface Props {
  testEnvironmentInitialAppState?: AppState
}

export const InjectTestingRecoilState: React.FC<Props> = ({
  testEnvironmentInitialAppState = {
    todoList: [],
  },
}) => {
  const [, setAppState] = useRecoilState<AppState>(initialAppState)

  useEffect(() => {
    setAppState(testEnvironmentInitialAppState)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}
