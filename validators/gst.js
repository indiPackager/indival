const createResponse =
    require('../utils/response');

const sanitizeGST =
    require('../sanitizers/gst');

function isGST(value) {

    const sanitized =
        sanitizeGST(value);

    const gstRegex =
        /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;

    const valid =
        gstRegex.test(sanitized);

    if (!valid) {

        return createResponse(
            false,
            'Invalid GST number',
            null,
            'gst'
        );
    }

    return createResponse(
        true,
        'Valid GST number',
        {
            value: sanitized
        },
        'gst'
    );
}

module.exports = isGST;