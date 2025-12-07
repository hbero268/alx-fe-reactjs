import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    else if (ingredients.split(",").length < 2)
      newErrors.ingredients = "At least two ingredients required";
    if (!steps.trim()) newErrors.steps = "Preparation steps are required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log({ title, ingredients, steps });
      setTitle("");
      setIngredients("");
      setSteps("");
      setErrors({});
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Add New Recipe
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Recipe Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter recipe title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ingredients
            </label>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="4"
              placeholder="Enter ingredients (comma-separated)"
            />
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preparation Steps
            </label>
            <textarea
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="6"
              placeholder="Enter preparation steps"
            />
            {errors.steps && (
              <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRecipeForm;
