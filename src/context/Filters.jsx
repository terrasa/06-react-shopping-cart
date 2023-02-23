import { createContext, useState } from 'react'

export const FiltersContext = createContext()

export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState(['All'])
  const [filterPrice, setFilterPrice] = useState('300')
  return (
    <FiltersContext.Provider value={{
      filters, setFilters, filterPrice, setFilterPrice
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
