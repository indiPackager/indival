function isPAN(value) {
    // exmp :- ABCDE1234F
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    return panRegex.test(value);
}

module.exports = isPAN;