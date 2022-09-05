const express = require('express');
const router = express.Router();

const AuthorController=require('../controllers/AuthorController')
const BlogController=require('../controllers/BlogController')


//apis:-

router.post('/CreateAuthor',AuthorController.createAuthor)
router.post("/createBlog",BlogController.createBlogs)

module.exports = router;