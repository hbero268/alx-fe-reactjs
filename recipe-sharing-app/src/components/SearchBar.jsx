import React from 'react'
import { useRecipeStore } from './recipeStore'

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm)
  const searchTerm = useRecipeStore((state) => state.searchTerm)

  return (
    <input
      type="text"
      value={searchTerm}
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: '8px',
        marginBottom: '16px',
        width: '100%',
        borderRadius: '8px',
        border: '1px solid #ccc',
      }}
    />
  )
}

export default SearchBar
