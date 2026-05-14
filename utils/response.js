function createResponse(
    valid,
    message,
    data = null,
    type = null
) {

    return {
        valid,
        type,
        message,
        data
    };
}

module.exports = createResponse;