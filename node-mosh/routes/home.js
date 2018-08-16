const express = require('express');

const router = express.Router();

// home - serving templates
router.get('/', (req, res) => {
    res.render('index', {title: "First template", message: "Welcome to home page."});
});

module.exports = router;