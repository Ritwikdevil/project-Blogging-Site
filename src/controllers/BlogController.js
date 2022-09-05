const BlogModel= require("../models/BlogModel")
//CreateData
const createBlogs= async function (req, res) {
    let data= req.body
    let savedData= await BlogModel.create(data)
    res.send({msg: savedData})
}
//GetData
const getBlogsData= async function (req, res) {
    let allAuthors= await BlogModel.find()
    res.send({msg: allAuthors})
}

//

module.exports.createBlogs= createBlogs
module.exports.getBlogsData= getBlogsData