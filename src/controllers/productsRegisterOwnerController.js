const fs = require('fs');
const path = require('path');
const {
	validationResult
} = require('express-validator');
const User = require('../models/UserOwner')
const bcryptjs = require('bcryptjs');

const db = require('../database/models');
const {
	Console
} = require('console');
const fetch = require('node-fetch');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

// constantes de las bases de datos de sequelize modules
const UserOwner = db.UserOwner;
const TelefonoOwner = db.TelefonoOwner;
const MedioDePago = db.MedioDePago;
const LogoOwner = db.LogoOwner;
const ImagenOwner = db.ImagenOwner;
const DetalleLugarOwner = db.DetalleLugarOwner;
const Ubicacion = db.Ubicacion
const HomeOwner = db.HomeOwner


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

		res.render("partial/register/formularioDatosCancha")
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
			image = "estrella-gris.png";
			image2 = "estrella-gris.png";
			image3 = "estrella-gris.png";
			logo = "estrella-gris.png";
		}

		UserOwner.findOne({
			where: {
				email: req.body.email
			}
		}).then((userInDB) => {
			if (userInDB != null) {

				return res.render("partial/register/formularioDatosCancha", {
					errors: {
						email: {
							msg: 'Este mail ya está registrado, intenta con otro'
						}
					},
					oldData: req.body
				});
			} else {
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

						LogoOwner.create({
							logo: logo,
							users_owners_id: idOwner
						})

						DetalleLugarOwner.create({
							iluminacion: req.body.iluminacion,
							estacionamiento: req.body.estacionamiento,
							wifi: req.body.wifi,
							vestuario: req.body.vestuarios,
							ducha: req.body.duchas,
							parrilla: req.body.parrilla,
							quincho: req.body.quincho,
							quiosco: req.body.quiosco,
							users_owners_id: idOwner
						})

						MedioDePago.create({
							transferencia: req.body.transferencia,
							mercado_pago: req.body.mercadoPago,
							efectivo: req.body.efectivo,
							tarjeta: req.body.tarjeta,
							users_owners_id: idOwner,

						})

						Ubicacion.create({
							provincia: req.body.provincia,
							localidad: req.body.localidad,
							municipio: req.body.municipio,
							calle: req.body.calle,
							numeracion: req.body.numeracion,
							users_owners_id: idOwner
						})
						ImagenOwner.create({
							image: image,
							image2: image2,
							image3: image3,
							users_owners_id: idOwner
						})
						HomeOwner.create({
							nombre_del_lugar: req.body.nombreDelLugar,
							users_owners_id: idOwner,
							img_ho: image,
							img_hl: logo
						})


					})

					.then(() => {
						return res.redirect("/userOwner/loginCourt");
					})
					.catch(error => res.send(error))
			}
		})
	},


	// Redirect
	redirect: (req, res) => {

		//let id = products.length;
		res.render("partial/register/redireccion", {
			userOwnerLogged: req.session.userOwnerLogged,
			//	id
		});

	},

	// Update - Form to edit
	edit: (req, res) => {

		let idOwner = req.params.id
		let userOwner = UserOwner.findByPk(idOwner)
		let direccion = Ubicacion.findByPk(idOwner)
		let telefono = TelefonoOwner.findByPk(idOwner)
		let detalleLugar = DetalleLugarOwner.findByPk(idOwner)
		let medioDePago = MedioDePago.findByPk(idOwner)

		Promise
			.all([userOwner, direccion, telefono, detalleLugar, medioDePago])
			.then(([userOwner, direccion, telefono, detalleLugar, medioDePago]) => {
				res.render("partial/register/editOwnerForm", {
					userOwner,
					direccion,
					telefono,
					detalleLugar,
					medioDePago
				})
			})
	},
	// Update - Method to update
	update: (req, res) => {

		let userOwnerID = req.params.id
		let userOwner = UserOwner.findByPk(userOwnerID)

		UserOwner
			.update({
				nombre: req.body.nombre,
				apellido: req.body.apellido,
				nombre_del_lugar: req.body.nombre_del_lugar,

			}, {
				where: {
					id: userOwnerID
				}
			})
			.then(() => {
				TelefonoOwner.update({
					telefono: req.body.telefono,
					telefono2: req.body.telefono2
				}, {
					where: {
						users_owners_id: userOwnerID
					}
				})
			})
			.then((result) => {
				DetalleLugarOwner.update({
					iluminacion: req.body.iluminacion,
					estacionamiento: req.body.estacionamiento,
					wifi: req.body.wifi,
					vestuario: req.body.vestuario,
					ducha: req.body.ducha,
					parrilla: req.body.parrilla,
					quincho: req.body.quincho,
					quiosco: req.body.quiosco,
				}, {
					where: {
						users_owners_id: userOwnerID
					}
				})
			})

			.then(() => {
				MedioDePago.update({
					transferencia: req.body.transferencia,
					mercado_pago: req.body.mercado_pago,
					efectivo: req.body.efectivo,
					tarjeta: req.body.tarjeta,
				}, {
					where: {
						users_owners_id: userOwnerID
					}
				})

				Ubicacion.update({
					calle: req.body.direccion,
					numeracion: req.body.numeracion,
				}, {
					where: {
						users_owners_id: userOwnerID
					}
				})

			})

			.then(() => {
				return res.redirect("/userOwner/loginCourt");
			})
			.catch(error => res.send(error))
	},


	// Redirect
	redirect: (req, res) => {

		//let id = products.length;
		res.render("partial/register/redireccion", {
			userOwnerLogged: req.session.userOwnerLogged,
			//	id
		});

	},

	// let id = req.params.id
	// let productToEdit = products.find(product => product.id == id)


	// // let image
	// // if (req.files[0] != undefined) {
	// // 	image = req.files[0].filename
	// // } else {
	// // 	image = productToEdit.image
	// // }


	// productToEdit = {
	// 	id: productToEdit.id,
	// 	...req.body,
	// 	image: image,
	// }

	// let newProduct = products.map(product => {

	// 	if (product.id == productToEdit.id) {

	// 		return product = {
	// 			...productToEdit
	// 		};
	// 	}

	// 	return product
	// })


	// fs.writeFileSync(productsFilePath, JSON.stringify(newProduct, null, ' '));

	// res.redirect("/userOwner/vistaCancha/" + productToEdit.id)

	//},

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