const fs = require('fs');
const path = require('path');


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const db = require('../database/models');

// Modelo
const UserOwner = db.UserOwner;
const TelefonoOwner = db.TelefonoOwner;
const MedioDePago = db.MedioDePago;
const LogoOwner = db.LogoOwner;
const ImagenOwner = db.ImagenOwner;
const DetalleLugarOwner = db.DetalleLugarOwner;
const Cancha = db.Cancha;
const Ubicacion = db.Ubicacion
const ImagenCancha = db.ImagenCancha

const controller = {


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

		res.render("partial/userOwner/registrarCancha")

	},

	// Create -  Method to store
	store: (req, res) => {

		let image;
		if (req.files[0] != undefined) {
			image = req.files[0].filename;
		} else {
			image = "estrella-gris.png";
		}
		let userPlayerID = req.params.id
		
		Cancha
			.create({
				identificacion: req.body.identificacion,
				capacidad: req.body.capacidad,
				valor: req.body.valor,
				users_owners_id: userPlayerID,
				deportes_players_id: 1,
				tipo_de_cancha_id: 1
			})
			.then((result) => {
				const idCancha = result.id
        console.log("🚀 ~ file: productsCourtController.js ~ line 56 ~ .then ~ result.id", result.id)
				
				ImagenCancha.create({
					image: image,
					canchas_id: idCancha
				})

				// DiaHorarioCancha.create({
				// 	dias_id: req.body.dias,
				// 	horas_id: req.body.horas,
				// 	canchas_id: idCancha
				// })

			}).then(() => {
				return res.redirect("/userOwner/update")
			})


			


		// let newProduct = {
		// 	id: products[products.length - 1].id + 1,
		// 	...req.body, 
		// 	image: image
		// }

		// products.push(newProduct);

		// fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));

		//  return res.redirect("/userOwner/update")

	},
	redirect: (req, res) => {

		res.render("partial/userOwner/redireccionUpdate", {
			userOwnerLogged: req.session.userOwnerLogged
		});

	},


	// Update - Form to edit
	edit: (req, res) => {

		let id = req.params.id
		let product = products.find(product => product.id == id)

		res.render("partial/userOwner/editarCancha", {
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

		return res.redirect("/userOwner/update")



	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {
		let id = req.params.id
		let productToDelete = products.filter(product => product.id != id)

		fs.writeFileSync(productsFilePath, JSON.stringify(productToDelete, null, ' '));

		return res.redirect("/userOwner/update")

	}
};

module.exports = controller;