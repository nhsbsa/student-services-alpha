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

router.post('/v1/clear-session-and-search', function (req, res) {
  req.session.destroy(err => {
    if (err) {
      console.error('Session clear error:', err);
    }
    res.redirect('/BSA-internal/v1/user-type');
  });
});

router.post('/v1/user-type', (req, res) => {

    res.redirect('/BSA-internal/v1/student-search');
});

module.exports = router;
