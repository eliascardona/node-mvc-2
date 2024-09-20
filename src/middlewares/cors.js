const cors = require('cors');

const ACCEPTED_ORIGINS = [
    'http://127.0.0.1:3000',
    'http://127.0.0.1:5500'
]

const corsMiddleware = ({acceptedOrigins=ACCEPTED_ORIGINS}={}) => (req, res, next) => {
    const corsOptions = {
        origin: (origin, callback) => {
            if(acceptedOrigins.includes(origin)) {
                return callback(null, true)
            }
            if(!origin) {
                return callback(null, true)
            }
            return callback(new Error('Not allowed by CORS'))
        },
    }

    if(req.method === 'OPTIONS') {
        res.set('Access-Control-Allow-Methods', 'OPTIONS, POST, GET, PUT, DELETE');
        res.set('Access-Control-Allow-Headers', 'Authorization, Content-Type');
        return res.status(200).send('')
    }

    cors(corsOptions)(req, res, next)
}











module.exports = { corsMiddleware };

/*app.use(
    (req, res, next) => {
        if(req.method === 'OPTIONS') {
            res.set('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE')
            res.set('Access-Control-Allow-Headers', 'Authorization, Content-Type')
            res.status(200).send('good')
        }
        if(req.method === 'GET') {
            res.set('Access-Control-Allow-Origin', '*')
        }
        next()
    }
)*/


