import React, { useState } from 'react';

function Search({ setImages }) {
  const [query, setQuery] = useState('');

  const searchImages = async () => {
    const apiKey = 'YOUR_UNSPLASH_API_KEY';
    try {
      const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}`);
      const data = await response.json();
      setImages(data.results);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for images..."
      />
      <button onClick={searchImages}>Search</button>
    </div>
  );
}

export default Search;
