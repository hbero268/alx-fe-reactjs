import React from 'react'
import { Link } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'
import FavoriteButton from './FavoriteButton' // ✅ import this

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes.length > 0
    ? state.filteredRecipes
    : state.recipes
  )

  if (recipes.length === 0) {
    return <p>No recipes found. Add some new ones!</p>
  }

  return (
    <div>
      <h2>All Recipes</h2>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '10px',
            marginBottom: '10px',
          }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>

          {/* ✅ Add Favorite button here */}
          <div style={{ marginTop: '8px' }}>
            <FavoriteButton recipeId={recipe.id} />
          </div>

          {/* Link to view details */}
          <div style={{ marginTop: '8px' }}>
            <Link to={`/recipes/${recipe.id}`}>View Details</Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RecipeList
