import React from 'react'
import { useRecipeStore } from './recipeStore'
import DeleteRecipeButton from './DeleteRecipeButton'

const FavoritesList = () => {
  const favorites = useRecipeStore((state) => state.favorites)
  const recipes = useRecipeStore((state) => state.recipes)

  const favoriteRecipes = favorites
    .map((id) => recipes.find((r) => r.id === id))
    .filter(Boolean)

  if (favoriteRecipes.length === 0)
    return <p>No favorites yet. Add some to your favorites ❤️</p>

  return (
    <div>
      <h2>My Favorites ❤️</h2>
      {favoriteRecipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '10px',
            marginBottom: '8px',
          }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <DeleteRecipeButton recipeId={recipe.id} />
        </div>
      ))}
    </div>
  )
}

export default FavoritesList
