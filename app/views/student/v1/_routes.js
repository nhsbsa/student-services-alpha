// ********************************
// student (v1)
// ********************************

// External dependencies
const express = require('express');
const router = express.Router();

// ********************************

// ********************************
// student view
// ********************************


// govonelogin security code option //

router.post('/v1/get-security-code', (req, res) => {

  const chooseSecurityCodes = req.session.data['choose-security-codes']

  if (chooseSecurityCodes === 'Text message') {
      res.redirect('/student/v1/govonelogin/enter-phone-number')
  } else {
      res.redirect('/student/v1/govonelogin/auth-app')
  }

});

// govonelogin security code option //

router.post('/v1/course', (req, res) => {

  const course = req.session.data['course']

  if (course === 'Dentistry' || course === 'Medicine and Surgery' || course === 'Dental Surgery') {
      res.redirect('/student/v1/check-course')
  } else {
      res.redirect('/student/v1/full-part-time')
  }

});

module.exports = router;
