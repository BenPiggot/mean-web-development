exports.render = function(req,res) {
<<<<<<< HEAD
=======
  console.log('index is rendering')
>>>>>>> 0f33465abf95d1f66da9dc0741ff72c5304eda4a
  if (req.session.lastVisit) {
    console.log(req.session.lastVisit);
  }

  req.session.lastVisit = new Date();
  res.render('index', {
    title: 'Hello World',
    userFirstName: req.user ? req.user.firstName : ''
  });
};

