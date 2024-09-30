const {
    createMachine,
    getMachineAll,
    getMachineById,
    updateMachine,
    deleteMachine
} = require('../models/machineModel')


exports.getMachineAllCallback = async (req, res) => {
    try {
        const machineRows = await getMachineAll()

        if(machineRows.length > 0) {
            return res.status(200).json(machineRows)
        } else if (machineRows.length > 0) {
            return res.status(204).json({ msg: 'no content' })
        }
        return res.status(200).json({ msg: 'algo raro' })

    } catch (error) {
        if(error.message) {
            console.error(
                JSON.stringify({ ControllerError: `${error.message}`})
            )
            return res.status(500).json({ ControllerError: `${error.message}` })
        }
        return res.status(500).json({ ControllerError: `${error}` })
    }
}


exports.getMachineByIdCallback = async (req, res) => {
    try {
        const machineId = req.params.id
        const movie = await getMachineById(machineId)

        if(movie) {
            return res.status(200).json(movie)
        }

        return res.status(404).json({ error: 'tupla no encontrada' })

    } catch (error) {
        if(error.message) {
            console.error(
                JSON.stringify({ ControllerError: `${error.message}`})
            )
            return res.status(500).json({ ControllerError: `${error.message}` })
        }
        return res.status(500).json({ ControllerError: `${error}` })
    }
}



exports.createMachineCallback = async (req, res) => {
    try {
        const { descripcion } = req.body
        const createdTuple = await createMachine(descripcion)

        return res.status(201).json({ createdTuple: createdTuple })

    } catch (error) {
        if(error.message) {
            console.error(
                JSON.stringify({ ControllerError: `${error.message}`})
            )
            return res.status(500).json({ ControllerError: `${error.message}` })
        }
        return res.status(500).json({ ControllerError: `${error}` })
    }
}



exports.updateMachineCallback = async (req, res) => {
    try {
        const { descripcion } = req.body
        const updatedTuple = await updateMachine(descripcion)
        if(updatedTuple) {
            return res.status(200).json({ updatedTuple: updatedTuple })
        }
        return res.status(404).json({ error: 'Película no encontrada' })

    } catch (error) {
        if(error.message) {
            console.error(
                JSON.stringify({ ControllerError: `${error.message}`})
            )
            return res.status(500).json({ ControllerError: `${error.message}` })
        }
        return res.status(500).json({ ControllerError: `${error}` })
    }

}


exports.deleteMachineCallback = async (req, res) => {
    try {
        const machineId = req.params.id
        const deletedTuple = await deleteMachine(machineId)

        if(deletedTuple) {
            return res.status(200).json({ deletedTuple: deletedTuple})
        }
        return res.status(404).json({ error: 'Película no encontrada' })

    } catch (error) {
        if(error.message) {
            console.error(
                JSON.stringify({ ControllerError: `${error.message}`})
            )
            return res.status(500).json({ ControllerError: `${error.message}` })
        }
        return res.status(500).json({ ControllerError: `${error}` })
    }
}