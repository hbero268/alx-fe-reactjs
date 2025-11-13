import { useState } from 'react'
import { useRecipeStore } from './recipeStore'
import { useNavigate } from 'react-router-dom'

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim() || !description.trim()) {
      alert('Please fill in all fields!')
      return
    }
    const newRecipe = { id: Date.now().toString(), title, description }
    addRecipe(newRecipe)
    setTitle('')
    setDescription('')
    // navigate to newly created recipe details (optional)
    navigate(`/recipes/${newRecipe.id}`)
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h2>Add a New Recipe</h2>
      <input
        type="text"
        placeholder="Recipe title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: 'block', marginBottom: '8px', width: '100%' }}
      />
      <textarea
        placeholder="Recipe description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ display: 'block', marginBottom: '8px', width: '100%' }}
      />
      <button type="submit">Add Recipe</button>
    </form>
  )
}

export default AddRecipeForm
