var errors = require('generic-errors');

module.exports = function(callback){
    return function(error, result){
        if(error){
            return callback(error);
        }

        if(!result){
            return callback(new errors.NotFound());
        }

        callback(null, result);
    };
};