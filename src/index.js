const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const morgan = require('morgan')
const { corsMiddleware } = require('./middlewares/cors.js')
const machinesRoutes = require('./routes/machinesRoutes.js')
const productsRoutes = require('./routes/productsRoutes.js')
const frontendRoutes = require('./routes/views/frontendRoutes.js')

app.use(morgan('common'))
app.use(bodyParser.json())

app.use(function(req, res, next) {
	corsMiddleware(req, res)
	next()
})
app.get('/', (req, res) => {
    res.send('Es necesario realizar las peticiones a partir de \/maquina')
})


app.use('/manufactory/machines', (req, res) => {
    machinesRoutes(req, res)
})
app.use('/manufactory/products', (req, res) => {
    productsRoutes(req, res)
})
app.use('/frontend', (req, res) => {
    frontendRoutes(req, res)
})




app.use(function(req, res, next) {
	notFoundMiddleware(req, res, next)
})

app.use(
	(err, req, res, next) => {
		res.status(500).json({ message: 'Ocurrió un error en el servidor' })
	}
)


app.listen(8080, () => {
    console.log(`Servicio MVC en puerto 8080`)
})
