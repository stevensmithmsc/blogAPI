let data = require('../data')

module.exports = {
    getComments(req, res) {
        //console.log("Get Comments for Post", req.params.postId)
        if(!data.store.posts[req.params.postId])
            return res.status(404).send({ 
                error: `No post with ID ${req.params.postId}`
            })
        if(!data.store.posts[req.params.postId].comments)
            return res.status(404).send({ 
                error: `Post ${req.params.postId} has no comments`
            })
        res.json(data.store.posts[req.params.postId].comments)
    }, 
    addComment(req, res) {
        //console.log("Add Comments for Post", req.params.postId, req.body)
        if(!data.store.posts[req.params.postId])
            return res.status(404).send({ 
                error: `No post with ID ${req.params.postId}`
            })
        if(!req.body.text)
            return res.status(400).send({ 
                error: 'No text field in comment'
            })
        if(!data.store.posts[req.params.postId].comments)
            data.store.posts[req.params.postId].comments = []
        let obj = { text: req.body.text }
        data.store.posts[req.params.postId].comments.push(obj)
        res.Status(201).json(obj)
    },
    updateComment(req, res) {
        //console.log("Update Comment", req.params.postId, req.params.commentId, req.body)
        if(!data.store.posts[req.params.postId])
            return res.status(404).send({ 
                error: `No post with ID ${req.params.postId}`
            })
        if(!data.store.posts[req.params.postId].comments[req.params.commentId])
            return res.status(404).send({ 
                error: `Post ${req.params.postId} has no comment with ID ${req.params.commentId}`
            })
        let obj = { text: req.body.text }
        Object.assign(data.store.posts[req.params.postId].comments[req.params.commentId], obj)
        res.sendStatus(204)
    },
    removeComment(req, res) {
        //console.log("Delete Comment", req.params.postId, req.params.commentId)
        if(!data.store.posts[req.params.postId])
            return res.status(404).send({ 
                error: `No post with ID ${req.params.postId}`
            })
        if(!data.store.posts[req.params.postId].comments[req.params.commentId])
            return res.status(404).send({ 
                error: `Post ${req.params.postId} has no comment with ID ${req.params.commentId}`
            })    
        data.store.posts[req.params.postId].comments.splice(req.params.commentId, 1)
        res.sendStatus(204)
    }  
  }