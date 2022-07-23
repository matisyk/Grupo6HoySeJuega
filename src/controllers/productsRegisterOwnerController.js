const fs = require('fs');
const path = require('path');
const {
	validationResult
} = require('express-validator');
const User = require('../models/UserOwner')
const bcryptjs = require('bcryptjs');

const productsFilePath = path.join(__dirname, '../database/userOwner.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require('../database/models');
const {
	Console
} = require('console');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

// constantes de las bases de datos de sequelize modules
const UserOwner = db.UserOwner;
const TelefonoOwner = db.TelefonoOwner;
const MedioDePago = db.MedioDePago;
const LogoOwner = db.LogoOwner;
const ImagenOwner = db.ImagenOwner;
const DetalleLugarOwner = db.DetalleLugarOwner;
const Cancha = db.Cancha;
const Ubicacion = db.Ubicacion


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

	//Create - Form to create
	create: (req, res) => {

		let medioDePago = MedioDePago.findAll();
		let detalleLugarOwner = DetalleLugarOwner.findAll();
		let ubicacion = Ubicacion.findAll();

		Promise
			.all([ medioDePago, detalleLugarOwner, ubicacion])
			.then(([medioDePago, detalleLugarOwner, ubicacion]) => {

				res.render("partial/register/formularioDatosCancha", {
					medioDePago, 
					detalleLugarOwner, 
					ubicacion
				})
			})
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
			image2 = "imagenCancha-1654372985364-494608673.jpg";
			image3 = "imagenCancha-1654372985364-494608673.jpg";
			logo = "imagenCancha-1654372985364-494608673.jpg";
		}

		// let userInDB = User.findByField('email', req.body.email);
		// if (userInDB) {
		// 	return res.render("partial/register/formularioDatosCancha", {
		// 		errors: {
		// 			email: {
		// 				msg: 'Este mail ya está registrado, intenta con otro'
		// 			}
		// 		},
		// 		oldData: req.body
		// 	});
		// }

		UserOwner.findAll({
			where: {
				email: req.body.email
			}
		}).then(userInDB => {
	
			if (userInDB && userInDB.Email === req.body.email) {
	
				return res.render("partial/register/formularioDatosCancha", {
					errors: {
						email: {
							msg: 'Este mail ya está registrado, intenta con otro'
						}
					},
					oldData: req.body,
					medioDePago,
					detalleLugarOwner,
					ubicacion
				});
			}
		})

		UserOwner
		.create({
			nombre: req.body.nombre,
			apellido: req.body.apellido,
			email: req.body.email,
			password: bcryptjs.hashSync(req.body.password, 10),
			nombre_del_lugar: req.body.nombreDelLugar,

		})
		.then((result) => {
			const idOwner = result.id
			TelefonoOwner.create({
				telefono: req.body.telefono,
				telefono2: req.body.telefono2,
				users_owners_id: idOwner
			})

			ImagenOwner.create({
				foto: image,
				users_owners_id: idOwner
			})
		})

		.then(() => {
			return res.redirect("/userPlayer/loginPlayer");
		})
		.catch(error => res.send(error))
	},


		//let newProduct = {
		//	id: products[products.length - 1].id + 1,
		//	...req.body,
		//	image: image,
		//	image2: image2,
		//	image3: image3,
		//	logo: logo,
		//	password: bcryptjs.hashSync(req.body.password, 10)
		//}

		// products.push(newProduct);

		// fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));

		//res.redirect("/userOwner/loginCourt/");



	//},

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