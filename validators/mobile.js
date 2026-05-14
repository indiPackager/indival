const mobileData =
    require('../dist/mobile-data');

const createResponse =
    require('../utils/response');

const sanitizeMobile =
    require('../sanitizers/mobile');

function isMobile(number, country) {

    const sanitized =
        sanitizeMobile(number);

    const config =
        mobileData[country];

    if (!config) {

        return createResponse(
            false,
            'Unsupported country',
            null,
            'mobile'
        );
    }

    const regex =
        new RegExp(config.regex);

    const valid =
        regex.test(sanitized);

    if (!valid) {

        return createResponse(
            false,
            'Invalid mobile number',
            {
                country: config.country,
                code: config.code
            },
            'mobile'
        );
    }

    return createResponse(
        true,
        'Valid mobile number',
        {
            country: config.country,
            code: config.code,
            value: sanitized
        },
        'mobile'
    );
}

module.exports = isMobile;