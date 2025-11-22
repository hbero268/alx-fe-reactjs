import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 flex-grow rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {user && (
        <div className="p-4 border rounded shadow">
          <img src={user.avatar_url} alt={user.login} className="w-24 h-24 rounded-full mb-2" />
          <h2 className="text-xl font-bold">{user.login}</h2>
          <a
            href={user.html_url}
            className="text-blue-500 underline"
            target="_blank"
            rel="noreferrer"
          >
            Visit Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
