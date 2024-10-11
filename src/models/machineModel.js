const pool = require('../config/database')

const createMachine = async (descripcion) => {
    const insertionValues = [descripcion]
    const sql = 'INSERT INTO maquina (descripcion) VALUES ($1) RETURNING *'

    try {
        const result = await pool.query(
            sql, insertionValues
        )
        return result.rows[0]
    } catch(dbException) {
        throw new Error(`${dbException}`)
    }
}



const getMachineAll = async () => {
    const sql = 'SELECT maq_id, descripcion FROM maquina'

    try {
        const result = await pool.query(
            sql
        )
        return result.rows
    } catch(dbException) {
        throw new Error(`${dbException}`)
    }
}



const getMachineById = async (id) => {
    const queryParams = [id]
    const sql = 'SELECT * FROM maquina WHERE maq_id = $1'

    try {
        const result = await pool.query(
            sql, queryParams
        )
        return result.rows[0]
    } catch(dbException) {
        throw new Error(`${dbException}`)
    }
}



const updateMachine = async (maq_id, descripcion) => {
    const values = [maq_id, descripcion]
    const sql = 'UPDATE maquina SET descripcion = $2, WHERE maq_id = $1'

    try {
        const result = await pool.query(
            sql, values
        )
        return result.rows[0]
    } catch(dbException) {
        throw new Error(`${dbException}`)
    }
}



const deleteMachine = async (id) => {
    const deletionId = [id]
    const sql = 'DELETE FROM maquina WHERE maq_id = $1'

    try {
        const result = await pool.query(
            sql, deletionId
        )
        return result.rows[0]
    } catch(dbException) {
        throw new Error(`${dbException}`)
    }
}


module.exports = {
    createMachine,
    getMachineAll,
    getMachineById,
    updateMachine,
    deleteMachine,
}
