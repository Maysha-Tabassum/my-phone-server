const express = require('express');
const cors = require('cors');
const phones = require('./phones.json')
const app = express()
const port = 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to my phone website')
})

app.get('/phones', (req, res) => {
    res.send(phones);
})

app.get('/phones/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const phone = phones.find(phone => phone.id === id) || {};
    console.log('show me the details of id', id);
    res.send(phone);
})

app.listen(port, () => {
    console.log(`phones data server is running on the port: ${port}`)
})