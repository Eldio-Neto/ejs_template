const PORT = 3000;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Posts = require('./models/post');


app.get('/all',(req, res)=>{
    res.json(JSON.stringify(Posts.getAll()));
})

app.post('/new',bodyParser.json(), (req, res)=>{
   
    let title = req.body.title;
    let description = req.body.description;

    Posts.newPost(title, description);

    res.send("Post adicionado!");

})

app.delete('/excluir/:id', (req, res)=>{
   
    let id = req.params.id;
    res.send(Posts.deletePost(id))    
})

app.listen(PORT, ()=>{
    console.log("server running on port " + PORT);
})

