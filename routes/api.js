const express = require('express');
const bodyParser = require('body-parser');
const Posts = require('../models/post');
const router = express.Router();

router.get('/all',(req, res)=>{
    res.json(JSON.stringify(Posts.getAll()));
})

router.post('/new',bodyParser.json(), (req, res)=>{
   
    let title = req.body.title;
    let description = req.body.description;

    Posts.newPost(title, description);

    res.send("Post adicionado!");

})

router.delete('/excluir/:id', (req, res)=>{
   
    let id = req.params.id;
    res.send(Posts.deletePost(id))    
})

module.exports = router;