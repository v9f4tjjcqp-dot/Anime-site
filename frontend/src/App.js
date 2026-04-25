import React from 'react';
import AnimeList from './components/AnimeList';

function App() {
  return (
    <div>
      <header style={styles.header}>
        <h1>NoVaAnime</h1>
        <p>Stream Your Favorite Anime Anytime</p>
      </header>
      <AnimeList />
    </div>
  );
}

const styles = {
  header: {
    background: '#FF007F',
    color: '#fff',
    padding: '20px',
    marginBottom: '20px',
    textAlign: 'center',
  },
};

export default App;
