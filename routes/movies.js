const express = require('express');
const Movie = require('../models/movie');

const router = express.Router();

// List all movies
router.get('/list', (req, res) => {
  res.render('movies_list');
});

// Add a new movie
router.get('/add', (req, res) => {
  res.render('movies_add');
});

// processing of add movie request
router.post('/add', (req, res) => {
  const movie = new Movie();
  movie.save((err) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    } else {
      res.redirect('/');
    }
  });
});

module.exports = router;
