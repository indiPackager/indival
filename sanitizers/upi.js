function sanitizeUPI(value) {

    if (!value) {
        return '';
    }

    return value
        .toString()
        .trim()
        .replace(/\s/g, '')
        .toLowerCase();
}

module.exports = sanitizeUPI;