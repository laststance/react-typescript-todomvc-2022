import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { AppState, recoilState } from './dataStructure'

interface Props {
  testEnvironmentInitialAppState?: AppState
}

export const InjectTestingRecoilState: React.FC<Props> = ({
  testEnvironmentInitialAppState = {
    todoList: [],
  },
}) => {
  const [, setAppState] = useRecoilState<AppState>(recoilState)

  useEffect(() => {
    setAppState(testEnvironmentInitialAppState)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}
