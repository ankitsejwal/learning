const express = require('express');

const router = express.Router()

const genres = [
    { id: 1, name: "sci-fi"},
    { id: 2, name: "action"},
    { id: 3, name: "romance"},
    { id: 4, name: "comedy"},
    { id: 5, name: "fantasy"}
]

// operations  CRUD
// -> create genre
// -> read genre, genres
// -> update genre
// -> delete genre
// get all genres

router.get('/', (req, res) => {
    res.send(genres);
});

// get a specific genre acc. to params
router.get('/:id', (req,res) => {

    const genre = genres.find(g => g.id === parseInt(req.params.id));
    
    if (!genre) return res.status(404).send('Genre does not exists');
    res.send(genre);

});

// create a new genre
router.post('/', (req, res) => {
    const schema = {
        name: Joi.string().min(4).required()
    }

    const genre = {
        id: genres.length + 1,
        name: req.body.name
    }

    const result = Joi.validate(req.body, schema);
    if (result.error) return res.status(400).send(result.error.details[0].message);
    
    // push new genre into genres
    genres.push(genre);
    res.send(genre);
});


// update genre
router.put('/:id', (req, res) => {
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    
    if (!genre) return res.status(404).send('Genre does not exists');

    const schema = {
        name: Joi.string().min(4).required()
    }

    const result = Joi.validate(req.body, schema);
    if (result.error) return res.status(400).send(result.error.details[0].message);
    
    genre.name = req.body.name;
    res.send(genre);
});


// delete a genre
router.delete('/:id', (req, res) => {
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('Not genre found with this ID');

    const index = genres.indexOf(genre);
    genres.splice(index, 1);
    res.send(genre);
});

module.exports = router;
