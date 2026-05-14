const createResponse =
    require('../utils/response');

const sanitizeUPI =
    require('../sanitizers/upi');

function isUPI(value) {

    const sanitized =
        sanitizeUPI(value);

    const upiRegex =
        /^[a-zA-Z0-9.\-_]{2,}@[a-zA-Z]{2,}$/;

    const valid =
        upiRegex.test(sanitized);

    if (!valid) {

        return createResponse(
            false,
            'Invalid UPI ID',
            null,
            'upi'
        );
    }

    return createResponse(
        true,
        'Valid UPI ID',
        {
            value: sanitized
        },
        'upi'
    );
}

module.exports = isUPI;