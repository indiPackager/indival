const createResponse =
    require('../utils/response');

const sanitizePAN =
    require('../sanitizers/pan');

function isPAN(value) {

    const sanitized =
        sanitizePAN(value);

    const panRegex =
        /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    const valid =
        panRegex.test(sanitized);

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
            value: sanitized
        },
        'pan'
    );
}

module.exports = isPAN;