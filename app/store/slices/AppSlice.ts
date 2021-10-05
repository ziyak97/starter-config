import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from 'store/store'

export enum Theme {
  Dark = 'dark',
  Light = 'light'
}

// Define a type for the slice state
interface AppState {
  theme: Theme
}

// Define the initial state using that type
const initialState: AppState = {
  theme: Theme.Light,
}

export const appSlice = createSlice({
  name: 'app',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    toggleTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload
    },
  },
})

export const { toggleTheme } = appSlice.actions

export const selectTheme = (state: RootState): Theme => state.app.theme


export default appSlice.reducer
