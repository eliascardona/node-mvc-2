const corsMiddleware = (req, res) => {
	if(req.method === 'OPTIONS') {
		res.set('Access-Control-Allow-Origin', 'http://localhost:5173')
		res.set('Access-Control-Allow-Methods', 'OPTIONS, POST, GET, PUT, DELETE')
		res.set('Access-Control-Allow-Headers', 'Content-Type')
		return res.status(200)
	}
}


module.exports = { corsMiddleware }
