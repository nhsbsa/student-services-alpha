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

// Has the user confirmed their course details  //

router.post('/v1/return-to-service', (req, res) => {

  const courseDetails = req.session.data['course-details']

  if (courseDetails === 'skipped') {
      res.redirect('/student/v1/university')
  } else {
      res.redirect('/student/v1/dashboard')
  }

});

// Course funding type skips full time part time //

router.post('/v1/course', (req, res) => {

  const course = req.session.data['course.name']

  if (course === 'Dentistry' || course === 'Medicine and Surgery' || course === 'Dental Surgery') {
      res.redirect('/student/v1/check-course')
  } else {
      res.redirect('/student/v1/full-part-time')
  }

});

module.exports = router;
