function isIFSC(value) {
    // exmp :- SBIN0001234
    const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;

    return ifscRegex.test(value);
}

module.exports = isIFSC;