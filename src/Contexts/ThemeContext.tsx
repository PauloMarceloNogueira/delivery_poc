import React, { useReducer, createContext } from 'react';
import { View } from 'react-native';

const themeReducer = (state: any, action: any) => {
  switch(action.type) {
    case 'Toogle': 
      return {
        ...state,
        isLight: !state.isLight
      }
    default:
      return state
  }
}

const themeInitialState:any = {
  isLight: true
}


const ThemeContext = createContext<{state: any; dispatch: React.Dispatch<any>}>({
  state: themeInitialState,
  dispatch: () => null
})

const ThemeProvider: React.FC = ({children}) => {
  const [state, dispatch] = useReducer(themeReducer, themeInitialState)
  return (
    <ThemeContext.Provider value={{state, dispatch}}>
      {children}
    </ThemeContext.Provider>
  )
}

export {ThemeContext, ThemeProvider}