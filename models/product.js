const db = require('../util/database');


const Cart = require('./cart');

module.exports = class Product {
    constructor(title, imageUrl, description, price, id){
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
        this.id = id;
    }
    save() {
        return db.execute('INSERT INTO products (title, price, imageUrl, description) VALUES (?, ?, ?, ?)',
        [this.title, this.price, this.imageUrl, this.description]);
    }

    static fetchAll() {
        return db.execute('SELECT * FROM products');
    }

    static findById(id, cb) {
        
    }
    static delete(id){
        
    }
}