const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
]

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

// Dealing with parameters like /api/courses/1
app.get('/api/course/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('Course not found!!!');
    res.send(course);
});

// Post a course
app.post('/api/courses', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required()
    }
    
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }

    const result = Joi.validate(req.body, schema);
    if (result.error) return res.status(400).send(result.error.details[0].message);

    courses.push(course);
    res.send(course);
});

// update course with PUT
app.put('/api/course/:id', (req, res) => {
    
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('Course not found.')

    const schema = {
        name: Joi.string().min(3).required()
    }

    const result = Joi.validate(req.body, schema);
    if (result.error) return res.status(400).send(result.error.details[0].message);

    course.name = req.body.name;
    res.send(course);
    
});

// delete a course
app.delete('/api/course/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('No course found.');

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));