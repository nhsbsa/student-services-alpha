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
    const funding = req.session.data['funding'];

    if (!funding || !Array.isArray(funding) || funding.length === 0) {
        // Handle empty or invalid funding
        req.session.data['funding'] = '';
    } else if (funding.includes('Learning Support Fund')) {
        req.session.data['funding'] = 'Learning Support Fund';
    } else if (funding.includes('Student Bursary')) {
        req.session.data['funding'] = 'Student Bursary';
    }

    res.redirect('/BSA-internal/v1/student-search');
});

module.exports = router;
