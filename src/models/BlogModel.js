const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId


const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    authorId: { type: ObjectId, required: true, ref: "authorModel" },
    tags: [{ type: String }],
    category: {
        type: String, required: true,
        //examples: [technology, entertainment, life style, food, fashion]
    },
    subcategory: [{ type: String }],
    isPublished: { type: Boolean, default: false },
    publishedAt: Date,
    isDeleted: { type: Boolean, default: false },
    deletedAt: Date
},
    { timestamps: true });
module.exports = mongoose.model('blogModel', blogSchema)