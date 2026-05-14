const createResponse =
    require('../utils/response');

function isIFSC(value) {

    const ifscRegex =
        /^[A-Z]{4}0[A-Z0-9]{6}$/;

    const valid =
        ifscRegex.test(value);

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
            value
        },
        'ifsc'
    );
}

module.exports = isIFSC;