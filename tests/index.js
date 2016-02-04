var test = require('tape'),
    genericCallback = require('../'),
    errors = require('generic-errors'),
    expectedResult = {foo: 'bar'},
    testError = 'BANG!!!';

test('genericCallback Exists', function (t) {
    t.plan(1);
    t.equal(typeof genericCallback, 'function',  'genericCallback is a function');
});

test('genericCallback returns a function', function (t) {
    t.plan(1);
    t.equal(typeof genericCallback(), 'function',  'genericCallback returns a function');
});

test('genericCallback handles error', function (t) {
    t.plan(2);

    var target = genericCallback(function(error, result){
        t.equal(error, testError, 'correct error');
        t.notOk(result, 'no result');
    });

    target(testError);
});

test('genericCallback handles no result', function (t) {
    t.plan(2);

    var target = genericCallback(function(error, result){
        t.ok(error instanceof errors.NotFound, 'correct error');
        t.notOk(result, 'no result');
    });

    target();
});

test('genericCallback handles result', function (t) {
    t.plan(2);

    var target = genericCallback(function(error, result){
        t.notOk(error, 'no error');
        t.deepEqual(result, expectedResult, 'correct result');
    });

    target(null, expectedResult);
});