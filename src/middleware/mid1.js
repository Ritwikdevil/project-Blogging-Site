let jwt=require('jsonwebtoken')

const authentication = async function (req, res,next) {
    try{
    let token = req.headers["x-api-key"];
    if(!token) return res.status(403).send({status:false,msg:"token must be present in header"})

    let decodetoken=jwt.verify(token,"tokensecretKey")
    if(!decodetoken) return res.status(403).send({status:false,msg:"Token is Invalid, Enter Correct Token"})
    console.log(token)
    req.authorId=decodetoken.authorId
    next();
    }
    catch(error){
        res.status(500).send({status:false,msg:error.msg,msg:"hi"})
    }

}

const authorization = async function (req, res, next) {
    try {
        let token = req.headers['x-api-key']
        let ObjectID = mongoose.Types.ObjectId
        let decodedToken = jwt.verify(token, "Blogging-Site")
        if (req.query.authorId) {
            let authorId = req.query.authorId
            if (!ObjectID.isValid(authorId)) { return res.status(400).send({ status: false, message: "Not a valid AuthorID" }) }
            if (authorId != decodedToken.authorId) {
                return res.status(403).send({ status: false, message: "You are not a authorized user" })
            }
            return next()
        }
        if (req.params.blogId) {
            let blogId = req.params.blogId
            if (!ObjectID.isValid(blogId)) { return res.status(400).send({ status: false, message: "Not a valid BlogID" }) }
            let check = await blogModel.findById(blogId)
            if (!check) { return res.status(404).send({ status: false, message: "No such blog exists" }) }
            if (check.authorId != decodedToken.authorId) {
                return res.status(403).send({ status: false, message: "You are not a authorized user" })
            }
            return next()
        }
        else {
            return res.status(403).send({ status: false, message: "AuthorID or BlogID is mandatory" })
        }
    }
    catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}



module.exports.authentication=authentication
module.exports.authorization=authorization