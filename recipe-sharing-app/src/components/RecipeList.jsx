import React from 'react'
import { useRecipeStore } from './recipeStore'
import { Link } from 'react-router-dom'

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes)

  if (!recipes.length) {
    return <p>No recipes found. Try adding one or change your search.</p>
  }

  return (
    <div>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: '1px solid #ddd',
            borderRadius: '10px',
            padding: '12px',
            marginBottom: '10px',
          }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipes/${recipe.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  )
}

export default RecipeList
