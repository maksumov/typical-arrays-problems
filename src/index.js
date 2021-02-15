exports.min = (array) => (array && array.sort((a, b) => a - b)[0]) || 0;

exports.max = (array) => (array && array.sort((a, b) => b - a)[0]) || 0;

exports.avg = (array) =>
    (array && array.reduce((a, c) => (a += c), 0) / array.length) || 0;
