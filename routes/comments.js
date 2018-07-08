let data = require('../data')

module.exports = {
    getComments(req, res) {
        console.log("Get Comments for Post", req.params.postId)
        res.json(data.store.posts[req.params.postId].comments)
    }, 
    addComment(req, res) {
        console.log("Add Comments for Post", req.params.postId, req.body)
        data.store.posts[req.params.postId].comments.push(req.body)
        res.sendStatus(201)
    },
    updateComment(req, res) {
        console.log("Update Comment", req.params.postId, req.params.commentId, req.body)
        Object.assign(data.store.posts[req.params.postId].comments[req.params.commentId], req.body)
        res.sendStatus(204)
    },
    removeComment(req, res) {
        console.log("Delete Comment", req.params.postId, req.params.commentId)
        data.store.posts[req.params.postId].comments.splice(req.params.commentId, 1)
        res.sendStatus(204)
    }  
  }