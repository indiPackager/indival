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

module.exports = {
    isPAN,
    isGST,
    isUPI,
    isIFSC,
    isMobile
};