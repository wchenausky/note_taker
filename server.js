const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs')

const PORT = process.env.PORT || 8081;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

require('./Develop/routes/apiRoutes')(app)
require('./Develop/routes/htmlRoutes')(app)

app.listen(PORT, () => {
    console.log('App listening PORT: ${PORT}');
});