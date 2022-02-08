const db = require('../../database/models');
const sequelize = db.sequelize;

const Movies = db.Movie;


module.exports = {
    create: (req, res) => {
        Movies.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre_id
        })
        .then(movie => {
            res.status(200).json({movie})
        })
        .catch(err => {
            res.status(500).json({error:err})
        })
    }, 
    destroy: (req, res) => {
        let movieId = req.params.id;
        Movies
        .destroy({where: {id: movieId}, force: true})
        res.status(200).json(`Pelicula con id ${movieId} eliminada!`)
        .catch(err => {
            res.status(500).json({error:err})
        })
    }
}