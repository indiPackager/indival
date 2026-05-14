const createResponse =
    require('../utils/response');

function isUPI(value) {

    const upiRegex =
        /^[a-zA-Z0-9.\-_]{2,}@[a-zA-Z]{2,}$/;

    const valid =
        upiRegex.test(value);

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
            value
        },
        'upi'
    );
}

module.exports = isUPI;