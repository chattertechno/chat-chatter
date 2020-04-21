const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Renee it doesnt work')
})

app.listen(3000)
