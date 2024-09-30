const express = require('express')
const router = express.Router()
const machineController = require('../controllers/machineController')

router.get(
    '/get/all',
    (req, res) => machineController.getMachineAllCallback(req, res)
)
router.get(
    '/get/id/:id',
    (req, res) => machineController.getMachineByIdCallback(req, res)
)
router.post(
    '/create',
    (req, res) => machineController.createMachineCallback(req, res)
)
router.put(
    '/update/id/:id',
    (req, res) => machineController.updateMachineCallback(req, res)
)
router.delete(
    '/delete/id/:id',
    (req, res) => machineController.deleteMachineCallback(req, res)
)


module.exports = router
