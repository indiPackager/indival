const createResponse =
    require('../utils/response');

const sanitizeIFSC =
    require('../sanitizers/ifsc');

function isIFSC(value) {

    const sanitized =
        sanitizeIFSC(value);

    const ifscRegex =
        /^[A-Z]{4}0[A-Z0-9]{6}$/;

    const valid =
        ifscRegex.test(sanitized);

    if (!valid) {

        return createResponse(
            false,
            'Invalid IFSC code',
            null,
            'ifsc'
        );
    }

    return createResponse(
        true,
        'Valid IFSC code',
        {
            value: sanitized
        },
        'ifsc'
    );
}

module.exports = isIFSC;