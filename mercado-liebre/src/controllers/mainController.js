const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		res.render('index', {products: products});
	},
	search: (req, res) => {
		let keywords = req.query.keywords;
		let product = products.filter((product) => {
			return product.name.toLowerCase().includes(keywords);
		});
		res.render('results', {product: product});
	},
};


module.exports = controller;
