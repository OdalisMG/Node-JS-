const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
    let animalfav = "Ballena";
    let numero = 45;
    let otronumero = 80;
    let resultado = numero + otronumero;
  res.send('Mi animal favorito es: ' + resultado);
});

app.post('/', function (req, res) {
    res.send('Hello World desde post')
});

app.put('/', function (req, res) {
    res.send('Hello World desde put')
});

app.delete('/', function (req, res) {
    res.send('Hello World desde delete')
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})