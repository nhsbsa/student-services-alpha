// ********************************
// student (v0.5)
// ********************************

// External dependencies
const express = require('express');
const router = express.Router();

// ********************************

// ********************************
// student view
// ********************************


// govonelogin security code option //

router.post('/v0.5/get-security-code', (req, res) => {

  const chooseSecurityCodes = req.session.data['choose-security-codes']

  if (chooseSecurityCodes === 'Text message') {
      res.redirect('/student/v0.5/govonelogin/enter-phone-number')
  } else {
      res.redirect('/student/v0.5/govonelogin/auth-app')
  }

});

module.exports = router;
