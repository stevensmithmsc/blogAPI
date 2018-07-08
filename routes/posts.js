let data = require('../data')

module.exports = {
    getPosts(req, res) {
        console.log("Get Posts")
        res.json(data.store)
    },
    addPost(req, res) {
        console.log("Add Post", req.body)
        data.store.posts.push(req.body)
        res.sendStatus(201)
    },
    updatePost(req, res) {
        console.log("Update Post", req.params.postId, req.body)
        Object.assign(data.store.posts[req.params.postId], req.body)
        res.sendStatus(204)
    },
    removePost(req, res) {
        console.log("Delete Post", req.params.postId)
        data.store.posts.splice(req.params.postId, 1)
        res.sendStatus(204)
    }
  }