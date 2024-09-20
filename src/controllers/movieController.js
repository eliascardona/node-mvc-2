const movieModel = require('../models/movieModel');

exports.getAllMovies = async (req, res) => {
    try {
        const movies = await movieModel.getAllMovies();
        return res.status(200).json(movies);


    } catch (error) {
        if(error.message) {
            console.error(`CONTROLLER \\ GET-ALL \\ \n  ${error.message}`)
            return res.status(500).json({ error: `Error ${error.message}` })
        }
        return res.status(500).json({ error: 'Error al obtener las películas' });
    }


}


exports.getMovieById = async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    try {
        const movie = await movieModel.getMovieById(req.params.id)
        if(movie) {
            return res.status(200).json(movie)
        }
        return res.status(404).json({ error: 'Película no encontrada' })



    } catch(error) {
        return res.status(500).json({ error: 'Error al obtener la película' })
    }


}



exports.createMovie = async (req, res) => {
    try {
        const { nombre } = req.body;
        const newMovie = await movieModel.createMovie(nombre);

        return res.status(201).json({message: 'resource has created',resource: newMovie})

    } catch (error) {
        if(error.message) {
            console.error(`CONTROLLER \\ POST \\ \n  ${error.message}`)
            return res.status(500).json({ error: `Error ${error.message}` })
        }
        return res.status(500).json({ error: 'Error al crear la película' });
    }
}



exports.updateMovie = async (req, res) => {
    try {
        corsHandler(req, res)
        const { nombre } = req.body;
        const updatedMovie = await movieModel.updateMovie(nombre);
        if(updatedMovie) {
            return res.status(200).json(updatedMovie);
        }
        return res.status(404).json({ error: 'Película no encontrada' });
    } catch (error) {
        return res.status(500).json({ error: 'Error al actualizar la película' });
    }


}


exports.deleteMovie = async (req, res) => {
    try {
        corsHandler(req, res)
        const deletedMovie = await movieModel.deleteMovie(req.params.id)
        if(deletedMovie) {
            res.status(200).json(deletedMovie)
        }
        return res.status(404).json({ error: 'Película no encontrada' })

    } catch (error) {
        return res.status(500).json({ error: 'Error al eliminar la película' })
    }


}

