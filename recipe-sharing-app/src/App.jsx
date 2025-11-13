import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'
import EditRecipeForm from './components/EditRecipeForm'

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>🍳 Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: '8px 16px' }}>
        {/* Simple navbar */}
        <nav style={{ marginBottom: '12px' }}>
          <Link to="/">Home</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} />
          {/* fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
