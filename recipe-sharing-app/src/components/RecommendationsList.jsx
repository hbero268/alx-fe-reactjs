import React, { useEffect } from 'react'
import { useRecipeStore } from './recipeStore'

const RecommendationsList = () => {
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  )
  const recommendations = useRecipeStore((state) => state.recommendations)

  useEffect(() => {
    generateRecommendations()
  }, [generateRecommendations])

  if (recommendations.length === 0)
    return <p>No recommendations yet. Add some favorites to get started!</p>

  return (
    <div>
      <h2>Recommended for You 🔮</h2>
      {recommendations.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '10px',
            marginBottom: '8px',
          }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  )
}

export default RecommendationsList
