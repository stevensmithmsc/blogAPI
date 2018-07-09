let data = require('../data')

module.exports = {
    getPosts(req, res) {
        //console.log("Get Posts")
        res.json(data.store)
    },
    addPost(req, res) {
        //console.log("Add Post", req.body)
        if(!req.body.name || !req.body.name.trim() || !req.body.url || !req.body.url.trim())
            return res.status(400).send({ 
                error: 'Please include name and url'
            })
        let obj = {
            name: req.body.name,
            url: req.body.url,
            text: req.body.text
        }
        data.store.posts.push(obj)
        res.Status(201).json(obj)
    },
    updatePost(req, res) {
        //console.log("Update Post", req.params.postId, req.body)
        if(!data.store.posts[req.params.postId])
            return res.status(404).send({ 
                error: `No post with ID ${req.params.postId}`
            })
        let obj = {
            name: req.body.name,
            url: req.body.url,
            text: req.body.text
        }
        Object.assign(data.store.posts[req.params.postId], obj)
        res.sendStatus(204)
    },
    removePost(req, res) {
        //console.log("Delete Post", req.params.postId)
        if(!data.store.posts[req.params.postId])
            return res.status(404).send({ 
                error: `No post with ID ${req.params.postId}`
            })
        data.store.posts.splice(req.params.postId, 1)
        res.sendStatus(204)
    }
  }