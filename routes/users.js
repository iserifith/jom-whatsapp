const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/Users');
const bcrypt = require('bcryptjs');

secret = 'ayam';

// Registering
router.post('/register', (req, res, next) => {
	let newUser = new User({
		name: req.body.name,
		email: req.body.email,
		username: req.body.username,
		password: req.body.password
	});
	User.addUser(newUser, (err, user, req, next) => {
		if (err) {
			console.error('addUser() in users.js failed');
			res.json({
				success: false,
				msg: 'An Error Occured!'
			});
		} else {
			console.log('addUser() in users.js success');
			res.json({
				success: true,
				msg: 'Successfully registered!'
			});
		}
	});
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
	const username = req.body.username;
	const password = req.body.password;

	User.getUserByUsername(username, (err, user) => {
		if (err) throw err;
		if (!user) {
			return res.json({
				success: false,
				msg: 'User Not Found!'
			});
		}

		User.comparePassword(password, user.password, (err, isMatch) => {
			if (err) throw err;
			if(isMatch){
				const token = jwt.sign({data:user}, secret, {
					expiresIn: 604800
				});

				res.json({
					success: true,
					token: 'JWT '+token,
					user: {
						id: user._id,
						name: user.name,
						username: user.username,
						email: user.email
					}
				});
			} else {
				return res.json({
					success: false,
					msg: 'Wrong password! Please try again.'
				});
			}
		});
	});
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
	res.json({user: req.user});
});

module.exports = router;
