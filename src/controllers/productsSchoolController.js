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
		let cancha = Cancha.findAll({
			where: {
				id: ownerID
			}
		});
		let dias = DiaOwner.findAll();
		let horarios = HoraOwner.findAll();

		Promise
			.all([deportes, genero, cancha, dias, horarios])
			.then(([deportes, genero, cancha, dias, horarios]) => {

				res.render("partial/userOwner/registrarEscuelita", {
					deportes,
					genero,
					cancha,
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
			canchas_id: req.body.cancha,
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

		let id = req.params.id
		let product = products.find(product => product.id == id)

		res.render("partial/userOwner/editarEscuelita", {
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