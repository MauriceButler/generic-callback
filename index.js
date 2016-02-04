var errors = require('generic-errors');

module.exports = function(callback, modifier){
    return function(error, result){
        if(error){
            return callback(error);
        }

        if(!result){
            return callback(new errors.NotFound());
        }

        if(modifier){
            return callback(null, modifier(result));
        }

        callback(null, result);
    };
};