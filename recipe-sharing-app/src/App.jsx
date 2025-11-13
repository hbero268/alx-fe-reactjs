import React from 'react'
import SearchBar from './components/SearchBar'
import RecipeList from './components/RecipeList'
import FavoritesList from './components/FavoritesList'
import RecommendationsList from './components/RecommendationsList'

function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '700px', margin: 'auto' }}>
      <h1>🍳 Recipe Sharing App</h1>

      <SearchBar />
      <RecipeList />

      <hr style={{ margin: '20px 0' }} />

      <FavoritesList />

      <hr style={{ margin: '20px 0' }} />

      <RecommendationsList />
    </div>
  )
}

export default App
