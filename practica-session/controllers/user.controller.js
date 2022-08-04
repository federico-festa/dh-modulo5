
const { validationResult } = require('express-validator')

const userController = {

  index: function(req, res) {

    const validations = validationResult( req );

    if( !validations.isEmpty() ){
      return res.render('index', { errors: validations.errors });
    }

    const user = req.body;

    res.render('index', { user });
  }
}

module.exports = userController;