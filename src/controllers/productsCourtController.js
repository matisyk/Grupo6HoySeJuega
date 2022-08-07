const fs = require('fs');
const path = require('path');
const {
	validationResult
} = require('express-validator');


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const db = require('../database/models');

// Modelo
const UserOwner = db.UserOwner;
const Cancha = db.Cancha;
const TipoCh = db.TipoDeCancha;
const Deportes = db.Deporte

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

		let deportes = Deportes.findAll();
		let tiposCancha = TipoCh.findAll();

		Promise
			.all([deportes, tiposCancha])
			.then(([deportes, tiposCancha]) => {



				res.render("partial/userOwner/registrarCancha", {
					deportes,
					tiposCancha
				})
			})


	},

	// Create -  Method to store
	store: (req, res) => {

		let deportes = Deportes.findAll();
		let tiposCancha = TipoCh.findAll();

		Promise
			.all([deportes, tiposCancha])
			.then(([deportes, tiposCancha]) => {
				const resultValidation = validationResult(req);
				if (resultValidation.errors.length > 0) {
					return res.render("partial/userOwner/registrarEscuelita", {
						errors: resultValidation.mapped(),
						oldData: req.body,
						deportes,
						tiposCancha
					});
				}
			})

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
				deportes_players_id: req.body.deporte,
				tipo_de_cancha_id: req.body.tipocancha,
				img_c: image,
			})
			.then((result) => {
				const idCancha = result.id

				// DiaHorarioCancha.create({
				// 	dias_id: req.body.dias,
				// 	horas_id: req.body.horas,
				// 	canchas_id: idCancha
				// })

			}).then(() => {
				return res.redirect("/userOwner/update")
			})

	},
	redirect: (req, res) => {

		res.render("partial/userOwner/redireccionUpdate", {
			userOwnerLogged: req.session.userOwnerLogged
		});

	},

	// Editar, vista
	edit: (req, res) => {

		let canchaID = req.params.id
		let canchas = Cancha.findByPk(canchaID, {
			include: ['tipoDeCancha', 'deporte']
		})
		let deportes = Deportes.findAll();
		let tiposCancha = TipoCh.findAll();

		Promise
			.all([deportes, tiposCancha, canchas])
			.then(([deportes, tiposCancha, canchas]) => {

				res.render("partial/userOwner/editarCancha", {
					canchas,
					deportes,
					tiposCancha
				})
			})
	},
	// Update - Metodo de actualizacion
	update: (req, res) => {

		let canchaID = req.params.id
		let image = req.body.image
		if (req.files[0] != undefined) {
			image = req.files[0].filename;

		} else {
			image = canchaID.img;
		}

		Cancha
			.update({
				identificacion: req.body.identificacion,
				capacidad: req.body.capacidad,
				valor: req.body.valor,
				deportes_players_id: req.body.deporte,
				tipo_de_cancha_id: req.body.tipocancha,
				img_c: image,

			}, {
				where: {
					id: req.params.id
				}
			})
			.then(() => {
				return res.redirect("/userOwner/update")
			})


	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {
		let canchaID = req.params.id

		Cancha.destroy({
				where: {
					id: canchaID
				},
				force: true
			})

			.then(() => {
				return res.redirect("/userOwner/update")
			})
			.catch(error => res.send(error))




	}
};

module.exports = controller;