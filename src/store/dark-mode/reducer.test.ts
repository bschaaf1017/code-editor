import { PayloadAction } from '@reduxjs/toolkit';
import darkModeReducer, { initialState, toggleDarkMode } from './reducer';

describe('dark mode reducer', () => {
  test('should return the initial state if no known action is provided', () => {
    expect(darkModeReducer(undefined, {} as PayloadAction)).toEqual(initialState)
  })
  test('should enable dark mode if disabled', () => {
    expect(darkModeReducer(initialState, toggleDarkMode)).toEqual(true)
  })
  test('should disable dark mode if enabled', () => {
    expect(darkModeReducer(!initialState, toggleDarkMode)).toEqual(initialState)
  })
})