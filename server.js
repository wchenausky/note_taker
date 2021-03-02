const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 8081;

app.use(express.json());
app.use(express.urlencodedlencoded({ extended: true}));
app.use(express.static('public'));