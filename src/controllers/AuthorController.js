const authorModel = require("../models/authorModel")
//CreateAuthor
const createAuthor = async function (req, res) {
    try {
        let data = req.body
        let savedData = await authorModel.create(data)
        res.send({ msg: savedData })
    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}
//GetData
const getAuthorsData = async function (req, res) {
    let allAuthors = await authorModel.find()
    res.send({ msg: allAuthors })
}

//

module.exports.createAuthor = createAuthor
module.exports.getAuthorsData = getAuthorsData