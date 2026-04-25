import React, { useEffect, useState } from 'react';

function AnimeList() {
  const [animeList, setAnimeList] = useState([]);

  // Fetch anime data from the backend API
  useEffect(() => {
    fetch('http://localhost:5000/api/anime')
      .then((response) => response.json())
      .then((data) => setAnimeList(data))
      .catch((error) => console.error('Error fetching anime:', error));
  }, []);

  return (
    <div style={styles.container}>
      <h2>Anime Catalog</h2>
      <div style={styles.grid}>
        {animeList.map((anime) => (
          <div key={anime._id} style={styles.card}>
            <img src={anime.thumbnail} alt={anime.title} style={styles.image} />
            <h3>{anime.title}</h3>
            <p>{anime.genre}</p>
            <a href={`/anime/${anime._id}`} style={styles.link}>
              Watch Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { padding: '20px' },
  grid: { display: 'flex', flexWrap: 'wrap', gap: '20px' },
  card: { border: '1px solid #ddd', borderRadius: '8px', padding: '10px', width: '200px' },
  image: { width: '100%', height: 'auto', borderRadius: '8px' },
  link: { display: 'block', marginTop: '10px', color: '#0066FF', textDecoration: 'none' },
};

export default AnimeList;
