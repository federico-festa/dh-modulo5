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
		let productToEdit = products.find(product => product.id == req.params.id);
		res.render('product-edit-form', {productToEdit: productToEdit});
	},
	// Update - Method to update
	update: (req, res) => {
		const productToUpdate = products.find(product => product.id == req.params.id);
		const productToEdit = req.body;
		productToUpdate.name = productToEdit.name;
		productToUpdate.price = productToEdit.price;
		productToUpdate.discount = productToEdit.discount;
		productToUpdate.category = productToEdit.category;
		productToUpdate.description = productToEdit.description;
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
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