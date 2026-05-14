function sanitizePAN(value) {

    if (!value) {
        return '';
    }

    return value
        .toString()
        .trim()
        .replace(/\s/g, '')
        .toUpperCase();
}

module.exports = sanitizePAN;