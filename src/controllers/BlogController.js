const blogModel = require("../models/blogModel")
const authorModel = require("../models/authorModel")

//CreateData 
const createBlogs = async function (req, res) {
    try {
        let data = req.body
        //checking valid author id by collection
        let authorId=req.body.authorId
        let checkAuthor=await authorModel.findById(authorId)
        if (!checkAuthor){
            return res.status(400).send({status:false, msg:"please provide valid author id"})
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
    try{
// //filteration process
// By author Id
// By category
// List of blogs that have a specific tag
    let FilterData=await blogModel.find(req.query)
        return res.send(FilterData)
    let allBlogs = await blogModel.find({isPublished:true},{isDeleted:false})
     res.send({ msg: allBlogs })
    if(!allBlogs) return res.status(404).send({ status: false, message: "No Doc Found"})

} catch(error){
        res.status(500).send({ status: false, message: error.message })
    }
}



//data--publish,deleted
module.exports.createBlogs = createBlogs
module.exports.getBlogsData = getBlogsData