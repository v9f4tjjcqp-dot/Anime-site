const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/novaanime', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Anime Schema/Model
const animeSchema = new mongoose.Schema({
  title: String,
  description: String,
  genre: String,
  thumbnail: String,
  videoLink: String,
});
const Anime = mongoose.model('Anime', animeSchema);

// Routes
app.get('/api/anime', async (req, res) => {
  try {
    const anime = await Anime.find();
    res.status(200).json(anime);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch anime.' });
  }
});

app.get('/api/anime/:id', async (req, res) => {
  try {
    const anime = await Anime.findById(req.params.id);
    if (anime) {
      res.status(200).json(anime);
    } else {
      res.status(404).json({ error: 'Anime not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch anime.' });
  }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));