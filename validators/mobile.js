function isIndianMobile(value) {
    //  exmp :- 9876543210
    const mobileRegex = /^[6-9]\d{9}$/;

    return mobileRegex.test(value);
}

module.exports = isIndianMobile;