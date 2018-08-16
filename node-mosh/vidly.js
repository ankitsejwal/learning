const config = require('config');
const helmet = require('helmet');
const morgan = require('morgan');
const Joi = require('joi');
const genres = require('./routes/genres');
const home = require('./routes/home');
const express = require('express');
const app = express();

app.use('/api/genres', genres);
app.use('/', home);

// middlewares
app.use(express.json());
app.use(express.static('public'));
app.use(helmet());
if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    console.log('Morgan enabled ...')
}

app.set('view engine', 'pug');
app.set('views', './views');

console.log(config.get('name'));
console.log(config.get('mail.host'));
console.log(config.get('mail.password'));

app.listen(4000, () => console.log('listening on port 4000...'));