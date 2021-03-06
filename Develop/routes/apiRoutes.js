const path =require('path');
const fs = require('fs');
const db = require ('../db/db.json');
const { v4: uuidv4 } = require('uuid');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(_dirname, '../db/db.json'))
});

app.post('/api/notes', (req, res)=> {
    id = uuidv4();
    const newNotes = {
        id: id,
        title: req.body.title,
        text: req.body.text
    }

fs.readFile(path.join(_dirname, '../db/db.json'), (err, data) => {
    if (err) throw err;
    let testNotes = JSON.parse(data);
    db.push(newNotes);


    fs.writeFile(ath.join(_dirname, '../db/db.json'), JSON.stringify(db), function(err){
        if (err) throw err;
        res.send(newNotes)
    })
})
});

}