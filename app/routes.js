module.exports = function(app, passport) {
	app.get('/', function(request, response) {
		response.render('index.html');
	});
	app.get('/user', auth, function(request, response) {
		response.render('user.html', {
			user : request.user
		});
	});
	app.get('/logout', function(request, response) {
		request.logout();
		response.redirect('/');
	});

		app.get('/login', function(request, response) {
			response.render('login.html', { message: request.flash('error') });
		});

		app.post('/login', passport.authenticate('login', {
			successRedirect : '/user', 
			failureRedirect : '/login', 
			failureFlash : true
		}));

		app.get('/signup', function(request, response) {
			response.render('signup.html', { message: request.flash('signuperror') });
		});


		app.post('/signup', passport.authenticate('signup', {
			successRedirect : '/user',
			failureRedirect : '/signup', 
			failureFlash : true 
		}));


};

function auth(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}
