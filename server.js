const express = require('express')
const bodyParser = require('body-parser')
const posts = require('./routes/posts')
const comments = require('./routes/comments')
const app = express()


app.use((req, res, next) => {
    console.log(`${req.method}: ${req.url}`)
    next()
})
app.use(bodyParser.json())

app.get('/posts', posts.getPosts)
app.post('/posts', posts.addPost)
app.put('/posts/:postId', posts.updatePost)
app.delete('/posts/:postId', posts.removePost)
app.get('/posts/:postId/comments', comments.getComments)
app.post('/posts/:postId/comments', comments.addComment)
app.put('/posts/:postId/comments/:commentId', comments.updateComment)
app.delete('/posts/:postId/comments/:commentId', comments.removeComment)
app.all('*', (req, res) => {
    res.sendStatus(404);
})

app.listen(3000)