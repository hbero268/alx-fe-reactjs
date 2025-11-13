import { Link } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes)
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe)

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add one above!</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: '12px' }}>
            <h3>
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
            <div>
              <Link to={`/edit/${recipe.id}`} style={{ marginRight: '8px' }}>
                Edit
              </Link>
              <button
                onClick={() => {
                  if (confirm('Delete this recipe?')) deleteRecipe(recipe.id)
                }}
              >
                Delete
              </button>
            </div>
            <hr />
          </div>
        ))
      )}
    </div>
  )
}

export default RecipeList
