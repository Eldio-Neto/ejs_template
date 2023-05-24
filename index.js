const express = require('express');
const apiRoutes = require('./routes/api');

const PORT = 3000;
const app = express();
app.use('/a',apiRoutes);

app.listen(PORT, ()=>{
    console.log("server running on port " + PORT);
})

