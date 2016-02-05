var errors = require('generic-errors');

module.exports = function(callback){
    return function(error, result){
        if(error){
            return callback(error);
        }

        if(result == null){
            return callback(new errors.NotFound());
        }

        callback(null, result);
    };
};