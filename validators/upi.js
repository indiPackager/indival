function isUPI(value) {
    // exmp :- example@bank
    const upiRegex = /^[a-zA-Z0-9.\-_]{2,}@[a-zA-Z]{2,}$/;

    return upiRegex.test(value);
}

module.exports = isUPI;