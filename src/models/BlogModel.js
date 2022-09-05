const mongoose = require('mongoose')
const ObjectId=mongoose.Schema.Types.ObjectId
const BlogSchema = new mongoose.Schema({
        title: {type:String,required:true},
        body: { type:String,required:true},
        authorId: {type:ObjectId, required:true, ref:"AuthorModel"},
        tags: [{type:String}],
        category: {
            type:String,required:true,
            //examples: [technology, entertainment, life style, food, fashion]
        },
        subcategory: [{type:String}]
            },
        // ,deletedAt: { when the document is deleted },
        // isDeleted: { boolean, default: false },
        // publishedAt: { when the blog is published },
        // isPublished: { boolean, default: false }
 { timestamps: true });
module.exports = mongoose.model('BlogModel', BlogSchema)