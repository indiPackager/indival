function sanitizeMobile(value) {

    if (!value) {
        return '';
    }

    return value
        .toString()
        .trim()
        .replace(/[\s-]/g, '');
}

module.exports = sanitizeMobile;