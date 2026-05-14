const createResponse =
    require('../utils/response');

function isPAN(value) {

    const panRegex =
        /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    const valid =
        panRegex.test(value);

    if (!valid) {

        return createResponse(
            false,
            'Invalid PAN number',
            null,
            'pan'
        );
    }

    return createResponse(
        true,
        'Valid PAN number',
        {
            value
        },
        'pan'
    );
}

module.exports = isPAN;