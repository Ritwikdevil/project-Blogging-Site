const express = require('express');
const router = express.Router();

const authorController=require('../controllers/authorController')
const blogController=require('../controllers/blogController')


//apis:-
//create apis:-
router.post('/CreateAuthor',authorController.createAuthor)//createAuthors
router.post("/createBlog",blogController.createBlogs)//createBlogs
router.put("/blogs/:blogId",blogController.updateBlog)//updateBlog

//get apis:-
router.get("/getBlog",blogController.getBlogsData)
module.exports = router;