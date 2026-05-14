const isPAN =
    require('./validators/pan');

const isGST =
    require('./validators/gst');

const isUPI =
    require('./validators/upi');

const isIFSC =
    require('./validators/ifsc');

const isMobile =
    require('./validators/mobile');

const sanitizePAN =
    require('./sanitizers/pan');

const sanitizeGST =
    require('./sanitizers/gst');

const sanitizeUPI =
    require('./sanitizers/upi');

const sanitizeIFSC =
    require('./sanitizers/ifsc');

const sanitizeMobile =
    require('./sanitizers/mobile');

module.exports = {
    isPAN,
    isGST,
    isUPI,
    isIFSC,
    isMobile,

    sanitizePAN,
    sanitizeGST,
    sanitizeUPI,
    sanitizeIFSC,
    sanitizeMobile
};