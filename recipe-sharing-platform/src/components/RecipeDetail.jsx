import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import recipeData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipeData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center mt-10 text-xl">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">{recipe.title}</h1>
          <p className="text-gray-600 mb-6">{recipe.summary}</p>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Ingredients</h2>
            <ul className="bg-gray-50 rounded-lg p-4 space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Cooking Instructions</h2>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700 leading-relaxed">{recipe.instructions}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
