
const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path')
const getProductFromFile = require('../helpers/getProductFromFile')

const productFilePath = path.join(rootDir, 
    'data',
    'products.json'
)

module.exports = class Product{
    constructor(title, price){
        this.title = title;
        this.price = price;
    }
    save(){
        getProductFromFile( products => {
            products.push(this)
            fs.writeFile(productFilePath, JSON.stringify(products), err => {
                console.log(err)
            })

        })
       
    }
    static fetchAll(cb){
       getProductFromFile(cb);
    }

}