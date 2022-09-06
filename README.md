# BlogSiteMiniGroup

 let authorid = req.query.authorId
        let category = req.query.category
        let tags = req.query.tags
        let subcategory = req.query.subcategory

        if (authorid) {
            if (!authorid) return res.status(404).send({ status: false, message: "No Doc Found" })
            let data = await blogModel.find({ isDelete: false } && { isPublished: true } && { authorid: authorid })
            if (data == []) return res.send({ status: false, msg: "data not available" })
            return res.status(200).send({ status: true, data: data })
        }
        if (category) {
            let data = await blogModel.find({ isDelete: false } && { isPublished: true } && { category: true })
            if (data == []) return res.send({ status: false, msg: "data not available" })
            return res.status(200).send({ status: true, data: data })
        }
        if (tags) {
            let data = await blogModel.find({ isDelete: false } && { isPublished: true } && { tags: true })
            if (data == []) return res.send({ status: false, msg: "data not available" })
            return res.status(200).send({ status: true, data: data })
        }
        if (subcategory) {
            let data = await blogModel.find({ isDelete: false } && { isPublished: true } && { subcategory: true })
            if (data == []) return res.send({ status: false, msg: "data not available" })
            return res.status(200).send({ status: true, data: data })




            ----- safe


            let obj = req.query
        let { authorId, category, tags, subcategory } = obj
        let isValid = mongoose.Types.ObjectId.isValid(authorId)
        
        if (Object.keys(obj).length != 0) {//in this condition we handle if no value for filter
            if (authorId) {
                if (!isValid) { return res.status(400).send({ status: false, message: "Not a valid Author ID" }) }
            }
            let filter = {} //this is blank object of make a filter
            if (authorId !=null) { filter.authorId = authorId } 
            if (!category) { filter.category = category }
            if (!tags) { filter.tags = { $in: [tags] } }
            if (!subcategory) { filter.subcategory = { $in: [subcategory] } }
            //for get data filtered
            let filtered = await blogModel.find(filter)
            if (filtered.length == 0) { return res.status(400).send({ status: false, message: "No such data found" }) }
            return res.status(200).send({ status: true, message: filtered })
        }
        else {
            let getBlogs = await blogModel.find({ $and: [{ isPublished: true }, { isDeleted: false }] })
            if (!getBlogs.length) { return res.status(404).send({ status: false, data: "No such blog found" }) }
            return res.status(200).send({ status: true, data: getBlogs })
        }