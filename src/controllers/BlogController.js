const mongoose = require('mongoose')
const blogModel = require("../models/blogModel")
const authorModel = require("../models/authorModel")

//CreateData 
const createBlogs = async function (req, res) {
    try {
        let data = req.body
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
        let authorid = req.query.authorId
        let category = req.query.category
        let tags = req.query.tags
        let subcategory = req.query.subcategory

        if (authorid) {
            if (!authorid) return res.status(404).send({ status: false, message: "No Doc Found" })
            let data = await blogModel.find({ isDelete: false } && { isPublished: true } && { authorids: authorid })
            if (data == []) return res.send({ status: false, msg: "data not available" })
            return res.status(200).send({ status: true, data: data })
        }
        if (category) {
            let data = await blogModel.find({ isDelete: false } && { isPublished: true } && { category: category })
            if (data == []) return res.send({ status: false, msg: "data not available" })
            return res.status(200).send({ status: true, data: data })
        }
        if (tags) {
            let data = await blogModel.find({ isDelete: false } && { isPublished: true } && { tags: tags })
            if (data == []) return res.send({ status: false, msg: "data not available" })
            return res.status(200).send({ status: true, data: data })
        }
        if (subcategory) {
            let data = await blogModel.find({ isDelete: false } && { isPublished: true } && { subcategory: subcategory })
            if (data == []) return res.send({ status: false, msg: "data not available" })
            return res.status(200).send({ status: true, data: data })
    }
  }  catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}

    //data--publish,deleted
    module.exports.createBlogs = createBlogs
    module.exports.getBlogsData = getBlogsData