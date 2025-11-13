import { useParams, Link } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'
import DeleteRecipeButton from './DeleteRecipeButton'
import FavoriteButton from './FavoriteButton' // ✅ import the button

const RecipeDetails = () => {
  const { id } = useParams()
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === id)
  )

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back to home</Link>
      </div>
    )
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {/* ✅ Add FavoriteButton here */}
      <div style={{ marginTop: '10px' }}>
        <FavoriteButton recipeId={recipe.id} />
      </div>

      <div style={{ marginTop: '12px' }}>
        <Link to={`/edit/${recipe.id}`} style={{ marginRight: '8px' }}>
          Edit Recipe
        </Link>
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>

      <div style={{ marginTop: '16px' }}>
        <Link to="/">← Back to all recipes</Link>
      </div>
    </div>
  )
}

export default RecipeDetails
