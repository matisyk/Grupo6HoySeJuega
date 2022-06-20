const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/schoolDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {


    // Detail - Detail from one product
	detalle: (req, res) => {

		let id = req.params.id
		let product = products.find(product => product.id == id)

		res.render("detalle", {product})

	},

	// Create - Form to create
	create: (req, res) => {

		res.render("partial/userOwner/registrarEscuelita")

	},
	
	// Create -  Method to store
	store: (req, res) => {

		

		let newProduct = {
			id: products[products.length - 1].id + 1,
			...req.body, 
		
		}

		products.push(newProduct);

		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ''));
		
		res.redirect("/userOwner/vistaCancha/10");

	},

	// Update - Form to edit
	edit: (req, res) => {
		
		let id = req.params.id
		let product = products.find(product => product.id == id)

		res.render("partial/userOwner/editarEscuelita", {product})

	},
	// Update - Method to update
	update: (req, res) => {
	
		let id = req.params.id
		let productToEdit = products.find(product => product.id == id)

		
		console.log("🚀 ~ file: productsController.js ~ line 78 ~ req.files", req.files)


		let newProduct = products.map(product => {

			if (product.id == productToEdit.id) {

				return product = {...productToEdit};
			}

			return product
		})


		fs.writeFileSync(productsFilePath, JSON.stringify(newProduct));

		res.redirect("/userOwner/vistaCancha/10")

	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let id = req.params.id
		let productToDelete = products.filter(product => product.id != id)

		fs.writeFileSync(productsFilePath, JSON.stringify(productToDelete));

		res.redirect("/userOwner/vistaCancha/" + id)

	}
};

module.exports = controller;