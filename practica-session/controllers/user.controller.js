const { validationResult } = require('express-validator')

const userController = {
  index: (req, res) => {
    const validations = validationResult(req);
    const user = req.body;
    req.session.user = user;
    const color = null;
    if (!validations.isEmpty()) {
      return res.render('index', { errors: validations.errors, user, color });
    };
    if(req.body.recordar == 'on') {
      res.cookie('color', req.body.color, {maxAge: 60000});
      const color = req.body.color;
      res.render('index', { user, color });
    };
    if(req.cookies.color){
      const color = req.cookies.color;
      res.render('index', { user, color });
    }else{
      const color = req.body.color;
      res.render('index', { user, color });
    };
  },
  user: (req, res) => {
    const user = req.session.user;
    res.render('user', { user })
  },
  delete: (req,res) => {
    res.clearCookie("color");
    res.redirect('/');
  }
}

module.exports = userController;