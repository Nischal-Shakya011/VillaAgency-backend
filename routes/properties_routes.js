const express = require('express');
const router = express.Router()
const {get, createProperty, fetchSingleProperty, createFeatured, featuredProperty} = require('../controller/properties_controller')

router.get("/", get)
router.post("/", createProperty)
router.get("/:id", fetchSingleProperty)


module.exports = router