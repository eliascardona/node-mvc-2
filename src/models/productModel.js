const pool = require('../config/database')

const createProduct = async (descripcion) => {
    const insertionValues = [descripcion]
    const sql = 'INSERT INTO producto (descripcion) VALUES ($1) RETURNING *'

    try {
        const result = await pool.query(
            sql, insertionValues
        )
        return result.rows[0]
    } catch(dbException) {
        throw new Error(`${dbException}`)
    }
}



const getProductAll = async () => {
    const sql = 'SELECT * FROM producto'

    try {
        const result = await pool.query(
            sql
        )
        return result.rows
    } catch(dbException) {
        throw new Error(`${dbException}`)
    }
}



const getProductById = async (id) => {
    const queryParams = [id]
    const sql = 'SELECT * FROM producto WHERE prod_id = $1'

    try {
        const result = await pool.query(
            sql, queryParams
        )
        return result.rows[0]
    } catch(dbException) {
        throw new Error(`${dbException}`)
    }
}



const updateProduct = async (maq_id, descripcion) => {
    const values = [maq_id, descripcion]
    const sql = 'UPDATE producto SET descripcion = $2, WHERE prod_id = $1'

    try {
        const result = await pool.query(
            sql, values
        )
        return result.rows[0]
    } catch(dbException) {
        throw new Error(`${dbException}`)
    }
}



const deleteProduct = async (id) => {
    const deletionId = [id]
    const sql = 'DELETE FROM producto WHERE prod_id = $1'

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
    createProduct,
    getProductAll,
    getProductById,
    updateProduct,
    deleteProduct,
}
