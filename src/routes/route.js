const express = require('express');
const router = express.Router();

const authorController = require('../controllers/authorController')
const blogController = require('../controllers/blogController')
const mid = require('../middleware/mid1')

//apis:-

router.post('/CreateAuthor', authorController.createAuthor)//createAuthors
router.post("/createBlog", mid.authentication, blogController.createBlogs)//createBlogs
router.put("/blogs/:blogId",mid.authorization, blogController.updateBlog)//updateBlog
router.delete("/deleteBlogs/:blogId", mid.authorization, blogController.deleteBlogs)//deleteBlogs
router.delete("/deleteBlogs", mid.authorization1, blogController.deleteBlogsByFilter)//deleteBlogsByFilter


//login
router.post("/login", authorController.loginAuthor)

//get apis:-
router.get("/getBlog", blogController.getBlogsData)
module.exports = router;