// External dependencies
const express = require('express');
const router = express.Router();

// Ministry of Justice Assets

// Add your routes here - above the module.exports line

// clear session data - link in footer
router.post('/clear-session-data/', (req, res) => {
    req.session.data = {}
    res.render('index')
})


// ================================
// Version number variables
// ================================

// V1 BSA
router.get('/BSA-internal/v1/:page', (req, res) => {
    const number = 'v1';
    const templatePath = `BSA-internal/v1/${req.params.page}`;
    res.locals.number = number;
    res.render(templatePath, { number });
});

router.use('/BSA-internal/v1', require('./views/BSA-internal/v1/_routes'));


// v0.5 student
router.get('/student/v0.5/:page', (req, res) => {
    const number = 'v0.5';
    const templatePath = `student/v0.5/${req.params.page}`;
    res.locals.number = number;
    res.render(templatePath, { number });
});

router.use('/student/v0.5', require('./views/student/v0.5/_routes'));

// V1 student
router.get('/student/v1/:page', (req, res) => {
    const number = 'v1';
    const templatePath = `student/v1/${req.params.page}`;
    res.locals.number = number;
    res.render(templatePath, { number });
});

router.use('/student/v1', require('./views/student/v1/_routes'));

module.exports = router;
