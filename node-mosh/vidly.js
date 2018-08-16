const helmet = require('helmet');
const morgan = require('morgan');
const Joi = require('joi');
const express = require('express');
const app = express();

// middlewares
app.use(express.json());
app.use(express.static('public'));
app.use(helmet());
if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    console.log('Morgan enabled ...')
}

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
app.get('/api/genres', (req, res) => {
    res.send(genres);
});

// get a specific genre acc. to params
app.get('/api/genre/:id', (req,res) => {

    const genre = genres.find(g => g.id === parseInt(req.params.id));
    
    if (!genre) return res.status(404).send('Genre does not exists');
    res.send(genre);

});

// create a new genre
app.post('/api/genres', (req, res) => {
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
app.put('/api/genre/:id', (req, res) => {
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
app.delete('/api/genre/:id', (req, res) => {
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('Not genre found with this ID');

    const index = genres.indexOf(genre);
    genres.splice(index, 1);
    res.send(genre);
});

app.listen(4000, () => console.log('listening on port 4000...'));