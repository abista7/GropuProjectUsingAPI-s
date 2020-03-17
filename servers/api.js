const express = require('express');
const errorMessage = require('./error.js')
const lesliesFunction = require('./leslie.js')
const abista7Function = require('./abista7.js')
const ahmadsFunction = require('./ahmad.js')
const sanjay417Function = require('./sanjay417.js')
const app = express();

app.get('/skyscanner', ahmadsFunction)
app.get('/xposed', lesliesFunction)
app.get('/abista7', abista7Function)
app.get('/sanjay417', sanjay417Function)
app.get('*', (req, res) => {
    res.send(errorMessage(req))
})

app.listen(5000);