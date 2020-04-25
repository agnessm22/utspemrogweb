'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    response.ok("UTS pemrograman website ku berjalan yey!",res)
};
