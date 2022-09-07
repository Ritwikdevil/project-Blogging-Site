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




module.exports.authentication=authentication
module.exports.authorization=authorization