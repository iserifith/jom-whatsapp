const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const urlencode = require('urlencode');


mongoose.Promise = global.Promise;

mongoose.connect('mongodb://admin:admin@ds239387.mlab.com:39387/jom_whatsapp')
.then(() =>  console.log('connected to database'))
.catch((err) => console.error(err));

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));

// Cors
app.use(cors());
// Output folder for our angular project. I think.
app.use(express.static(path.join(__dirname, 'dist')));


// Index Route
app.get('/', (req, res) => {
	res.send('Invalid Endpoint');
});

const mobile = require('./routes/mobile')
app.use('/api/mobile', mobile);

// Port
const port = 4100;

// Listen
app.listen(port, (err) => {
	if (err){
		console.log('Error starting the server.');
	} else {
		console.log('Server started on port '+port);
	}
});

module.exports = app;
