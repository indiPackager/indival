const isPAN = require('./validators/pan');
const isGST = require('./validators/gst');
const isUPI = require('./validators/upi');
const isIndianMobile = require('./validators/mobile');
const isIFSC = require('./validators/ifsc');

module.exports = {
    isPAN,
    isGST,
    isUPI,
    isIndianMobile,
    isIFSC
};