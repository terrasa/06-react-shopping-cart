import { createContext } from 'react'

export const FiltersContext = createContext()

export function FiltersProvider ({ children }) {
  return (
    <FiltersContext.Provider value='All'>
      {children}
    </FiltersContext.Provider>
  )
}
