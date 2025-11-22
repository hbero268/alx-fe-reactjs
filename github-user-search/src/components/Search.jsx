import React, { useState } from "react";
import { searchUsers } from "../services/githubService";
import { fetchUserData } from "../services/githubService";
function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchUserData;
    setLoading(true);
    setError("");
    setResults([]);

    try {
      const data = await searchUsers(username, location, minRepos);
      setResults(data.items);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Advanced GitHub User Search</h2>

      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-100 p-4 rounded-lg shadow"
      >
        <input
          type="text"
          placeholder="Username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 rounded border"
        />

        <input
          type="text"
          placeholder="Location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 rounded border"
        />

        <input
          type="number"
          placeholder="Min Repos..."
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="p-2 rounded border"
        />

        <button
          type="submit"
          className="md:col-span-3 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
        >
          Search
        </button>
      </form>

      {/* Conditional States */}
      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center mt-4 text-red-600">{error}</p>}

      {/* Results */}
      {results.length > 0 && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {results.map((user) => (
            <div
              key={user.id}
              className="p-4 border rounded shadow flex items-center gap-4 bg-white"
            >
              <img
                src={user.avatar_url}
                alt="avatar"
                className="w-16 h-16 rounded-full"
              />

              <div>
                <h3 className="font-semibold">{user.login}</h3>
                <a
                  href={user.html_url}
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
