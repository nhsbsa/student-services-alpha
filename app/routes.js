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

module.exports = router;
