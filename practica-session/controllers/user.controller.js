
const { validationResult } = require('express-validator')

const userController = {

  index: function(req, res) {

    const validations = validationResult( req );

    if( !validations.isEmpty() ){
      return res.render('index', { errors: validations.errors });
    }

    const user = req.body;
    req.session.user = user;

    res.render('index', { user });
  },
  user: (req,res) => {
    const user = req.session.user;
    res.render('user', {user})
  }
}

module.exports = userController;