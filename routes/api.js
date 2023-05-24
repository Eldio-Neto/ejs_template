const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const router = express.Router();

let user = {
    id: 0,
    name: 'Eldio',
    phone: '(92)9999-9999'
}

function render(data, obj) {
    for (let key in obj) {
        data = data.replace(`{{{${key}}}}`, obj[key]);
    }
    return data;
}



router.get('/', (req, res) => {
    const filePath = path.join(__dirname, '../template/index.html');
    
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        
        res.send(render(data,user));
    });
});


module.exports = router;