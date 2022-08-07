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
const TipoCh = db.TipoDeCancha;
const Deportes = db.Deporte
const Genero = db.Genero
const HoraOwner = db.HoraPlayer;
const DiaOwner = db.DiaPlayer;
const Escuelita = db.Escuelita;
const DiaYhora = db.DiaHorarioEscuelita;
const Profesor = db.Profesor

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

		let ownerID = req.params.id
		let deportes = Deportes.findAll();
		let genero = Genero.findAll();
		let dias = DiaOwner.findAll();
		let horarios = HoraOwner.findAll();

		Promise
			.all([deportes, genero, dias, horarios])
			.then(([deportes, genero, dias, horarios]) => {

				res.render("partial/userOwner/registrarEscuelita", {
					deportes,
					genero,
					dias,
					horarios
				})
			})
	},

	// Create -  Method to store
	store: (req, res) => {

		let image;
		if (req.files[0] != undefined) {
			image = req.files[0].filename;
		} else {
			image = "png-clipart-sports-school-inter-iit-sports-meet-sports-day-school-sports-elementary-school-thumbnail.png";
		}
		let ownerID = req.params.id

		Escuelita.create({
				valor: req.body.valor,
				genero_id: req.body.genero,
				deportes_players_id: req.body.deporte,
				categoria: req.body.categoria,
				img_e: image,
				alumnos: req.body.alumnos,
				users_owners_id: ownerID
			})
			.then((result) => {
				let idEscuela = result.id
				DiaYhora.create({
					escuelitas_id: idEscuela,
					dias_id: req.body.dia,
					horas_id: req.body.hora
				})
				Profesor.create({
					users_owners_id: ownerID,
					nombre: req.body.nprofesor,
					apellido: req.body.aprofesor,
					escuelitas_id: idEscuela,
				})
			}).then(() => {
				return res.redirect("/userOwner/update")
			})


	},

	// Update - Form to edit
	edit: (req, res) => {
		let userID = req.session.userOwnerLogged.id
		let escuelitaID = req.params.id
		let escuelitas = Escuelita.findByPk(escuelitaID, {
			include: ['deporteE', 'genero', "profesor", "diaYhora"],
			 where: {
			 	users_owners_id: userID
			 },
		})
		let deportes = Deportes.findAll();
		let genero = Genero.findAll();
		let profesor = Profesor.findAll();
		let dias = DiaOwner.findAll();
		let horarios = HoraOwner.findAll();

		Promise
			.all([escuelitas, deportes, genero, profesor, dias, horarios])
			.then(([escuelitas, deportes, genero, profesor, dias, horarios]) => {


				res.render("partial/userOwner/editarEscuelita", {
					deportes,
					escuelitas,
					genero,
					profesor,
					dias,
					horarios
				})
			})
	},
	// Update - Method to update
	update: (req, res) => {
		let escuelitaID = req.params.id

		let image
		if (req.files[0] != undefined) {
			image = req.files[0].filename
		} else {
			image = escuelitaID.image
		}
		Escuelita
			.update({
				valor: req.body.valor,
				genero_id: req.body.genero,
				deportes_players_id: req.body.deporte,
				categoria: req.body.categoria,
				img_e: image,
				alumnos: req.body.alumnos,
			}, {
				where: {
					id: req.params.id
				}
			})
		DiaYhora
			.update({
				dias_id: req.body.dia,
				horas_id: req.body.hora
			}, {
				where: {
					id: req.params.id
				}
			})
		Profesor
			.update({
				nombre: req.body.nprofesor,
				apellido: req.body.aprofesor,
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
		let escuelitaID = req.params.id

		Escuelita.destroy({
			where: {
				id: escuelitaID
			},
			force: true
		}).then(() => {
			return res.redirect("/userOwner/update")
		})
	}
};

module.exports = controller;