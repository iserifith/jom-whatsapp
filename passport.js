const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Users = require('./models/Users');

module.exports = function(passport){
	let opts = {};
	// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
	opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
	opts.secretOrKey = 'ayam';
	passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
		User.getUserById(jwt_payload.data._id, (err, user) => {
			if (err){
				return done(err, false);
			}
			if (user){
				return done(null, user);
			} else {
				return done(null, false);
			}
		});
	}));
}
