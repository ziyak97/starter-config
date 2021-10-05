import { Dispatch } from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { Action } from 'redux'
import type { RootState, AppDispatch } from 'store/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = (): Dispatch<Action> => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
