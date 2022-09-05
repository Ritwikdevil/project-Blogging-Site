const blogModel = require("../models/blogModel")
const authorModel = require("../models/authorModel")


//CreateData 
const createBlogs = async function (req, res) {
    try {
        let data = req.body
        let savedData = await blogModel.create(data)
        res.status(201).send({ msg: savedData })
    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }

}
//GetData
const getBlogsData = async function (req, res) {
    let allAuthors = await blogModel.find()
    res.send({ msg: allAuthors })
}

//

module.exports.createBlogs = createBlogs
module.exports.getBlogsData = getBlogsData