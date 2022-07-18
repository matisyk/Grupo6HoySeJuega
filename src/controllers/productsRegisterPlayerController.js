const fs = require('fs');
const path = require('path');
const {
	validationResult
} = require('express-validator');
const bcryptjs = require('bcryptjs');
const User = require('../models/UserPlayer')

const productsFilePath = path.join(__dirname, '../database/userPlayer.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require('../database/models');
const {
	Console
} = require('console');
const fetch = require('node-fetch');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

// constantes de las bases de datos de sequelize modules
const UserPlayer = db.UserPlayer;
const TelefonoPlayer = db.TelefonoPlayer;
const AutoValoracion = db.AutoValoracion;
const DeportesPlayers = db.Deporte;
const ImagenPlayer = db.ImagenPlayer;
const HoraPlayer = db.HoraPlayer;
const DiaPlayer = db.DiaPlayer;
const ZonasDeJuego = db.ZonaDeJuego

// APIS

const API = "https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre";


const controller = {

	// Detail - Detalle de un producto
	detalle: (req, res) => {

		let id = req.params.id
		let product = products.find(product => product.id == id)

		res.render("detalle", {
			product
		})

	},

	// Create - Formulario de creacion 
	create: (req, res) => {

		let valoraciones = AutoValoracion.findAll();
		let deportes = DeportesPlayers.findAll();
		let zonasdejuego = ZonasDeJuego.findAll();
		let dias = DiaPlayer.findAll()
		// fetch(API)
		// 	.then(response => response.json)
		// 	.then((result) => {
		// 		const geoubicacion = result.id
		// 	})
		// 	.catch(error => console.log(error));

		Promise
			.all([valoraciones, deportes, zonasdejuego])
			.then(([valoraciones, deportes, zonasdejuego]) => {

				res.render("partial/register/formularioDatosJugador", {
					valoraciones,
					deportes,
					zonasdejuego
				})
			})
	},


	// Create -  Metodo de creacion 
	store: (req, res) => {

		const resultValidation = validationResult(req);
		if (resultValidation.errors.length > 0) {
			return res.render("partial/register/formularioDatosJugador", {
				errors: resultValidation.mapped(),
				oldData: req.body,
				valoraciones,
				deportes,
				zonasdejuego
			});
		}
		let image;
		if (req.files[0] != undefined) {
			image = req.files[0].filename;
		} else {
			image = "imagenJugador-1654556031834-517220025.jpeg";
		}

		// let userInDB = User.findByField('email', req.body.email);
		// if (userInDB) {
		// 	return res.render("partial/register/formularioDatosJugador", {
		// 		errors: {
		// 			email: {
		// 				msg: 'Este mail ya está registrado, intenta con otro'
		// 			}
		// 		},
		// 		oldData: req.body,
		// 		valoraciones,
		// 		deportes,
		// 		zonasdejuego
		// 	});

		// }

		UserPlayer.findAll({
			where: {
				email: req.body.email
			}
		}).then(userInDB => {

			if (userInDB && userInDB.Email === req.body.email) {

				return res.render("partial/register/formularioDatosJugador", {
					errors: {
						email: {
							msg: 'Este mail ya está registrado, intenta con otro'
						}
					},
					oldData: req.body,
					valoraciones,
					deportes,
					zonasdejuego
				});
			}
		})

		//create
		UserPlayer
			.create({
				nombre: req.body.nombre,
				apellido: req.body.apellido,
				email: req.body.email,
				password: bcryptjs.hashSync(req.body.password, 10),
				fecha_nacimiento: req.body.edad,
				zonas_de_juego_id: req.body.zonasdejuego,
				auto_valoracion_id: req.body.autoValoracion,
				deportes_players_id: req.body.deporte1

			})
			.then((result) => {
				const idPlayer = result.id
				TelefonoPlayer.create({
					telefono: req.body.telefono,
					telefono2: req.body.telefono2,
					users_players_id: idPlayer
				})

				ImagenPlayer.create({
					foto: image,
					users_players_id: idPlayer
				})
				HoraPlayer.create({
					hora: req.body.hora1,
					hora2: req.body.hora2,
					hora3: req.body.hora3
				})
			})

			.then(() => {
				return res.redirect("/userPlayer/loginPlayer");
			})
			.catch(error => res.send(error))

		// let newProduct = {
		// 	id: products[products.length - 1].id + 1,
		// 	...req.body,
		// 	image: image,
		// 	password: bcryptjs.hashSync(req.body.password, 10)
		// }

		// products.push(newProduct);

		// fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));

	},

	// Redirect
	redirect: (req, res) => {


		res.render("partial/register/redireccion2", {
			userLoggedPlayer: req.session.userLoggedPlayer
		});

	},

	// Update - Form to edit
	edit: (req, res) => {

		let userPlayerID = req.params.id
		let userPlayer = UserPlayer.findByPk(userPlayerID)
		let valoraciones = AutoValoracion.findAll();
		let deportes = DeportesPlayers.findAll();
		let zonasdejuego = ZonasDeJuego.findAll();
		let dias = DiaPlayer.findAll()
		Promise
			.all([userPlayer, userPlayerID, valoraciones, deportes, zonasdejuego])
			.then(([userplayer, userPlayerID, valoraciones, deportes, zonasdejuego]) => {
				res.render("partial/register/editPlayerForm", {
					userplayer,
					userPlayerID,
					valoraciones,
					deportes,
					zonasdejuego
				})
			})

	},
	// Update - Method to update
	update: (req, res) => {

		let userPlayerID = req.params.id
		let userPlayer = UserPlayer.findByPk(userPlayerID)

		UserPlayer
			.update({
				nombre: req.body.nombre,
				apellido: req.body.apellido,
				email: req.body.email,
				password: bcryptjs.hashSync(req.body.password, 10),
				fecha_nacimiento: req.body.edad,
				zonas_de_juego_id: req.body.zonasdejuego,
				auto_valoracion_id: req.body.autoValoracion,
				deportes_players_id: req.body.deporte1

			})
			.then((result) => {
				const idPlayer = result.id
				TelefonoPlayer.update({
					telefono: req.body.telefono,
					telefono2: req.body.telefono2,
					users_players_id: idPlayer
				})

				ImagenPlayer.update({
					foto: image,
					users_players_id: idPlayer
				})
				HoraPlayer.update({
					hora: req.body.hora1,
					hora2: req.body.hora2,
					hora3: req.body.hora3
				})
			})

			.then(() => {
				res.redirect("/userPlayer/perfilDeJugador/" + req.session.userLoggedPlayer)
			})
			.catch(error => res.send(error))


		

	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {

		let id = req.params.id
		let productToDelete = products.filter(product => product.id != id)

		fs.writeFileSync(productsFilePath, JSON.stringify(productToDelete, null, ' '));

		res.redirect("/")

	}
};

module.exports = controller;