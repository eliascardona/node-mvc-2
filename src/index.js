const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const morgan = require('morgan')
const { corsMiddleware } = require('./middlewares/cors.js')
const movieRoutes = require('./routes/movieRoutes');

app.use(morgan('common'))
app.use(bodyParser.json())
//app.use(corsMiddleware())


app.get('/', (req, res) => {
    res.send('dirigete a \/movies')
})

app.use('/movies', (req, res, next) => {
    movieRoutes(req, res)
})

app.listen(8080, () => {
    console.log(`Servicio MVC en puerto 8080`)
})
