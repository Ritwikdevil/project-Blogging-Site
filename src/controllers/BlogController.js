const mongoose = require('mongoose')
const blogModel = require("../models/blogModel")
const authorModel = require("../models/authorModel")

const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true;
}

const isValidRequestBody = function (requestBody) {
    return Object.keys(requestBody).length > 0
}

const isValidObjectId = function (objectId) {
    return mongoose.Types.ObjectId.isValid(objectId)
}
//Createblogsdata//post
const createBlogs = async function (req, res) {
    try {
        let data = req.body
        if (!isValidRequestBody(data)) {
            res.status(400).send({ status: false, message: 'Invalid request parameters. please provide blog details' })
            return
        }

        //checking valid author id by collection
        let authorId = req.body.authorId
        let checkAuthor = await authorModel.findById(authorId)
        if (!checkAuthor) {
            return res.status(400).send({ status: false, msg: "please provide valid author id" })
        }
        //data creation
        let savedData = await blogModel.create(data)
        res.status(201).send({ msg: savedData }) //successfull blog creation
    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }

}
//Get Blog Data-- are not deleted and published
const getBlogsData = async function (req, res) {
    try {
        const filterQuery = { isDeleted: false, isPublished: true }
        const queryParams = req.query
        if (isValidRequestBody(queryParams)) {
            const { authorId, category, tags, subcategory } = queryParams

            if (isValid(authorId) && isValidObjectId(authorId)) {
                filterQuery['authorId'] = authorId
            }
            if (isValid(category)) {
                filterQuery['category'] = category
            }

            if (isValid(tags)) {
                filterQuery['tags'] = tags
            }
            if (isValid(subcategory)) {
                filterQuery['tags'] = subcategory
            }
        }
        const Blogs = await blogModel.find(filterQuery)
        if (Array.isArray(Blogs) && Blogs.length === 0) {
            res.status(404).send({ status: false, msg: "no blogs found" })
            return
        }
        res.status(200).send({ status: true, message: 'Blogs list', data: Blogs })
    }
    catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}


module.exports.createBlogs = createBlogs
module.exports.getBlogsData = getBlogsData