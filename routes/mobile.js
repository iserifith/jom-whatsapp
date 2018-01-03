const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Mobile = require('../models/Mobile');

// Get all mobile no.
router.get('/', function(req, res, next){
  Mobile.find(function(err, data){
    if (err) return next(err);
    res.json(data);
  });
});

// Get mobile no with id
router.get('/:id', function(req, res, next){
  Mobile.findById(req.params.id, function(err, data){
    if (err) return next(err);
    res.json(data);
  });
});

// Add new
router.post('/', function(req, res, next){
  Mobile.create(req.body, function(err, data){
    if (err) return next(err);
    res.json(data);
  });
});

// Edit
router.put('/:id', function(req, rest, next){
  Mobile.findByIdAndUpdate(req.params.id, req.body, function(err, data){
    if (err) return next(err);
    res.json(data);
  });
});

router.delete('/:id', function(req, res, next){
  Mobile.findByIdAndRemove(req.params.id, req.body, function(err, data){
    if (err) return next(err);
    res.json(data);
  });
});

module.exports = router;
