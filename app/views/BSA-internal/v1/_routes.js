// ********************************
// BSA-internal (v1)
// ********************************

// External dependencies
const express = require('express');
const router = express.Router();

// ********************************

// ********************************
// Admin view
// ********************************


// Student search //

router.post('/v1/student-search', (req, res) => {
    req.session.data['search'] = 'true';
    res.redirect('/BSA-internal/v1/student-search');
});

module.exports = router;
