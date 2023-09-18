import React, { createContext } from 'react'
export const StateContext = createContext()


const StateContextProvider = ({children}) => {
    const name = "John"
    const data = {name}
  return (
    <StateContext.Provider value={data}>
        {children}
    </StateContext.Provider>
  )
}

export default StateContextProvider