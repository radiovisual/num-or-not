'use strict';

var trim = require('trim');

module.exports = function (n) {
    var type = typeof n;

    if (type !== 'string' && type !== 'number') {
        return false;
    }

    if (type === 'string') {
        n = n.replace(/[,|.]/g, '');
        if (trim(n) === '') {
            return false;
        }
        n = Number(n);
    }
    return typeof n === 'number' && n - n < 1;
};
