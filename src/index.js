const { eq } = require("semver");

module.exports = function reverse (n) {
    
    const a = String(n).replace(/-/g,'');

    const b = a.split('').reverse().join('');

    return b;

}

