'use strict'

const express = require('express');
const app= express();

app.get('/', function (req, res) {
    let animalfav = "Ballena";
    let numero = 45;
    let otronumero = 80;
    let resultado = numero + otronumero;
  res.send('Mi animal favorito es: ' + resultado);
});

//Create
app.post('/', function (req, res) {
    res.send('Hello World desde post')
});

//Update
app.put('/', function (req, res) {
    res.send('Hello World desde put')
});

//Delete
app.delete('/', function (req, res) {
    res.send('Hello World desde delete')
});

module.exports = app;

