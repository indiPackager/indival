const fs = require('fs');

const path = require('path');

const dataFolder =
    path.join(__dirname, '../data');

const distFolder =
    path.join(__dirname, '../dist');

const outputFile =
    path.join(distFolder, 'mobile-data.js');

const files =
    fs.readdirSync(dataFolder);

let mergedData = {};

files.forEach((file) => {

    if (path.extname(file) !== '.json') {
        return;
    }

    const filePath =
        path.join(dataFolder, file);

    const jsonData =
        require(filePath);

    mergedData = {
        ...mergedData,
        ...jsonData
    };
});

if (!fs.existsSync(distFolder)) {
    fs.mkdirSync(distFolder);
}

const outputContent = `
const mobileData = ${JSON.stringify(
    mergedData,
    null,
    2
)};

module.exports = mobileData;
`;

fs.writeFileSync(
    outputFile,
    outputContent
);

console.log(
    'mobile-data.js generated successfully'
);