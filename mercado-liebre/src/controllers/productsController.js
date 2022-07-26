const fs = require('fs');
const path = require('path');
const { CLIENT_RENEG_LIMIT } = require('tls');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products', { products: products });
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let product = products.find(product => product.id == req.params.id);
		res.render('detail', { product: product });
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form');
	},
	
	// Create -  Method to store
	store: (req, res) => {
		let newProduct = req.body;
		newProduct.id = (products.length + 1);
		newProduct.image = req.file.filename;
		products.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('/');
	},

	// Update - Form to edit
	edit: (req, res) => {
		let productToEdit = products[req.params.id-1];
		res.render('product-edit-form', {products: products, productToEdit: productToEdit});
	},
	// Update - Method to update
	update: (req, res) => {
		let productsRead = fs.readFileSync(products, {encoding: 'utf-8'});
		products.forEach((product) => {
			if(product.id == req.params.id) {
				let product = {name: req.body.name, price: req.body.price, discount: req.body.discount, category: req.body.category, description: req.body.description};
			};
		});
		fs.writeFileSync(productsFilePath, JSON.stringify(productToEdit, null, ' '));
		res.redirect('/');
	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {
		let productsFilter = products.filter(product => product.id != req.params.id);
		fs.writeFileSync(productsFilePath, JSON.stringify(productsFilter, null, ' '));
		res.redirect('/');
	}
};

module.exports = controller;