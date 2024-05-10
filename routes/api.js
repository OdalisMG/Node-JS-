'use strict'

const express = require('express');

var api = express.Router();

api.get('/', (req, res) => {
    let numero = 45;
    let otronumero = 80;
    let resultado = numero - otronumero;
  res.send('Mi animal favorito es: ' + resultado);
});

//Create
api.post('/', (req, res) => {
    res.send('Hello World! desde post');
});

//Update
api.put('/', (req, res) => {
    res.send('Hello World! desde put');
});

//Delete
api.delete('/', (req, res) => {
    res.send('Hello World! desde delete');
});


