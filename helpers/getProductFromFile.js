const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path')

const getProductFromFile = cb => {
    const productFilePath = path.join(rootDir, 
        'data',
        'products.json'
    )
    
    fs.readFile(productFilePath, (err, fileContent) => {
        if(err) {
            return cb([]);
        }else {
            cb(JSON.parse(fileContent));
        } 
    })
}
module.exports = getProductFromFile;