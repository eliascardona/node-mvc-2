const express = require('express')
const router = express.Router()
const { machineHTMLForm, productHTMLForm } = require('./htmlcode/form.js')

router.get(
    '/createMachine',
    (req, res) => {
		return res.status(200).send(machineHTMLForm)
	}
)

router.get(
    '/createProduct',
    (req, res) => {
		return res.status(200).send(productHTMLForm)
	}
)



module.exports = router
