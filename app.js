const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Renee fuck')
})

app.listen(3000)