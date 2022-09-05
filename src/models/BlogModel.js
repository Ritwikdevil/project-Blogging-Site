const mongoose = require('mongoose')
const ObjectId=mongoose.Schema.Types.ObjectId
const BlogSchema = new mongoose.Schema({
        title: {type:String,required:true},
        body: { type:String,required:true},
<<<<<<< HEAD
        authorId: {type:ObjectId, required:true, ref:"AuthorModel"},
=======
        authorId: {type:ObjectId, required:true, ref:"AuthorModel" },
>>>>>>> e7de6615ab99b4c29a6d2e0c57a12afd586c4371
        tags: [{type:String}],
        category: {
            type:String,required:true,
            //examples: [technology, entertainment, life style, food, fashion]
        },
<<<<<<< HEAD
        subcategory: [{type:String}]
            },
        // ,deletedAt: { when the document is deleted },
        // isDeleted: { boolean, default: false },
        // publishedAt: { when the blog is published },
        // isPublished: { boolean, default: false }
 { timestamps: true });
=======
        subcategory: [{type:String}],
        isPublished: { type: Boolean, default: false },
        publishedAt: { type: Date , default:null},
        isDeleted: { type: Boolean,  default: false },
        deletedAt: { type: Date, default:null }
            }  ,

        { timestamps: true });
>>>>>>> e7de6615ab99b4c29a6d2e0c57a12afd586c4371
module.exports = mongoose.model('BlogModel', BlogSchema)