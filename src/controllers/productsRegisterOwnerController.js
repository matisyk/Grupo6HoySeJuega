const fs = require('fs');
const path = require('path');
const {
	validationResult
} = require('express-validator');
const User = require('../models/UserOwner')
const bcryptjs = require('bcryptjs');

const productsFilePath = path.join(__dirname, '../database/userOwner.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {

	register: (req, res) => {

		res.render("partial/register/register")
	},

	// Detail - Detail from one product
	detalle: (req, res) => {

		let id = req.params.id
		let product = products.find(product => product.id == id)

		res.render("detalle", {
			product
		})

	},

	// Create - Form to create
	create: (req, res) => {

		res.render("partial/register/formularioDatosCancha");

	},

	// Create -  Method to store
	store: (req, res) => {

		const resultValidation = validationResult(req);
		if (resultValidation.errors.length > 0) {
			return res.render("partial/register/formularioDatosCancha", {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

		let image;
		if (req.files[0] != undefined) {
			image = req.files[0].filename;
			image2 = req.files[1].filename;
			image3 = req.files[2].filename;
			logo = req.files[3].filename;
		} else {
			image = "imagenCancha-1654372985364-494608673.jpg";
		}

		let userInDB = User.findByField('email', req.body.email);
		if (userInDB) {
			return res.render("partial/register/formularioDatosCancha", {
				errors: {
					email: {
						msg: 'Este mail ya está registrado, intenta con otro'
					}
				},
				oldData: req.body
			});
		}

		let newProduct = {
			id: products[products.length - 1].id + 1,
			...req.body,
			image: image,
			image2: image2,
			image3: image3,
			logo: logo,
			password: bcryptjs.hashSync(req.body.password, 10)
		}

		products.push(newProduct);

		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));

		res.redirect("/userOwner/loginCourt/");



	},

	// Redirect
	redirect: (req, res) => {

		let id = products.length;
		res.render("partial/register/redireccion", {
					userOwnerLogged: req.session.userOwnerLogged,
			id
		});

	},

	// Update - Form to edit
	edit: (req, res) => {

		let id = req.params.id
		let product = products.find(product => product.id == id)

		res.render("partial/register/editOwnerForm", {
			product
		})

	},
	// Update - Method to update
	update: (req, res) => {

		let id = req.params.id
		let productToEdit = products.find(product => product.id == id)


		let image
		if (req.files[0] != undefined) {
			image = req.files[0].filename
		} else {
			image = productToEdit.image
		}


		productToEdit = {
			id: productToEdit.id,
			...req.body,
			image: image,
		}

		let newProduct = products.map(product => {

			if (product.id == productToEdit.id) {

				return product = {
					...productToEdit
				};
			}

			return product
		})


		fs.writeFileSync(productsFilePath, JSON.stringify(newProduct, null, ' '));

		res.redirect("/userOwner/vistaCancha/" + productToEdit.id)

	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {

		let id = req.params.id
		let productToDelete = products.filter(product => product.id != id)

		fs.writeFileSync(productsFilePath, JSON.stringify(productToDelete, null, ' '));

		res.redirect("/")

	},

	//validations
	processRegister: (req, res) => {
		const resultValidation = validationResult(req);
		if (resultValidation.errors.length > 0) {
			return res.render("partial/register/formularioDatosCancha", {
				errors: resultValidation.mapped()
			});
		}
	}

};

module.exports = controller;