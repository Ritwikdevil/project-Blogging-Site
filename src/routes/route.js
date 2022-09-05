const express = require('express');
const router = express.Router();
//const AuthorModel=require('../models/authorModel')
const AuthorController=require('../controllers/AuthorController')

//apis:-

router.post('/CreateAuthor',AuthorController.createAuthor)

module.exports = router;