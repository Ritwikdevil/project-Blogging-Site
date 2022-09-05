const AuthorModel= require("../models/authorModel")
//CreateData
const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}
//GetData
const getAuthorsData= async function (req, res) {
    let allAuthors= await AuthorModel.find()
    res.send({msg: allAuthors})
}

//

module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData