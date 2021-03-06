const path = require('path');

module.exports = (app) => {
    app.get('/', (req,res) => {
        res.sendFile(path.join(__dirname, '../Develop/public/index.html' ));
    });

    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../Develop/public/notes.html'));
    })
}