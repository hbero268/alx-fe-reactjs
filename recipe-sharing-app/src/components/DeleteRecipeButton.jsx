import { useRecipeStore } from './recipeStore'
import { useNavigate } from 'react-router-dom'

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe)
  const navigate = useNavigate()

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId)
      navigate('/') // go back to home after delete
    }
  }

  return <button onClick={handleDelete}>Delete</button>
}

export default DeleteRecipeButton
