const swag = require('../models/swag');

module.exports = {
  read: ( req, res, next ) => {
    res.status(200).send( swag );
  }
};


const swag_controller = require('./controllers/swag_controller');


