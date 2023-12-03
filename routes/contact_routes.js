const express = require('express');
const router = express.Router()
const {contactInfo} = require('../controller/contact_controller');

router.post("/", contactInfo)

module.exports = router