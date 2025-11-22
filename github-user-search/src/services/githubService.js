import axios from "axios";

// Advanced user search
export const searchUsers = async (username, location, minRepos) => {
  try {
    let query = "";

    if (username) query += `${username} `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>${minRepos}`;

    const response = await axios.get(
      `https://api.github.com/search/users?q=${query.trim()}`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
