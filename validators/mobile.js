const mobileData =
    require('../dist/mobile-data');

const createResponse =
    require('../utils/response');

function isMobile(number, country) {

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
        regex.test(number);

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
            value: number
        },
        'mobile'
    );
}

module.exports = isMobile;