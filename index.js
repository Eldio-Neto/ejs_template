const express = require('express');
const path = require ('path');

const PORT = 4000;
const app = express();

const users = [
    {id:0, name: 'eldio', phone: '123456789'},
    {id:1, name: 'eldio', phone: '123456789'},
    {id:2, name: 'eldio', phone: '123456789'},
    
]

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/',(req, res)=>{
    res.render('user', {users})
});

app.listen(PORT, ()=>{
    console.log("server running on port " + PORT);
})

