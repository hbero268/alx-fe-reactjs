import React from 'react'
import { useRecipeStore } from './recipeStore'

const FavoriteButton = ({ recipeId }) => {
  const { favorites, addFavorite, removeFavorite } = useRecipeStore((state) => ({
    favorites: state.favorites,
    addFavorite: state.addFavorite,
    removeFavorite: state.removeFavorite,
  }))

  const isFavorite = favorites.includes(recipeId)

  return (
    <button
      onClick={() =>
        isFavorite ? removeFavorite(recipeId) : addFavorite(recipeId)
      }
      style={{
        backgroundColor: isFavorite ? 'red' : '#eee',
        color: isFavorite ? 'white' : 'black',
        border: 'none',
        borderRadius: '6px',
        padding: '6px 12px',
        cursor: 'pointer',
      }}
    >
      {isFavorite ? '★ Favorited' : '☆ Add to Favorites'}
    </button>
  )
}

export default FavoriteButton
