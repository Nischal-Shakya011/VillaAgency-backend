const express = require('express');
const router = express.Router()
const {createFeatured, featuredProperty, createBest, getBest} = require('../controller/bestFeat_controller')


router.post("/featured", createFeatured)
router.get("/featured", featuredProperty)
router.post("/best", createBest)
router.get("/best", getBest)

module.exports = router