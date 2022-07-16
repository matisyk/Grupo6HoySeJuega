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

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const UserPlayer = db.UserPlayer;
const Telefono = db.Telefono

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

		res.render("partial/register/formularioDatosJugador")
	},


	// Create -  Method to store
	store: (req, res) => {

		const resultValidation = validationResult(req);
		if (resultValidation.errors.length > 0) {
			return res.render("partial/register/formularioDatosJugador", {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}
		let image;
		if (req.files[0] != undefined) {
			image = req.files[0].filename;
		} else {
			image = "imagenJugador-1654556031834-517220025.jpeg";
		}

		let userInDB = User.findByField('email', req.body.email);
		if (userInDB) {
			return res.render("partial/register/formularioDatosJugador", {
				errors: {
					email: {
						msg: 'Este mail ya está registrado, intenta con otro'
					}
				},
				oldData: req.body
			});

		}

		//create
		UserPlayer
			.create({
				nombre: req.body.nombre,
				apellido: req.body.apellido,
				email: req.body.email,
				password: bcryptjs.hashSync(req.body.password, 10),
				fecha_nacimiento: req.body.edad,
				zonas_de_juego_id: 1,

			})
			.then((result) => {
				const idPlayer = result.id
				Telefono.create({
					telefono: req.body.telefono,
					telefono2: req.body.telefono2,
					users_players_id: idPlayer
				})

				db.ImagenPlayer.create({
					foto: image,
					users_players_id: idPlayer
				})
				db.HoraPlayer.create({
					hora: req.body.hora1
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

		//fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));

	},

	// Redirect
	redirect: (req, res) => {

		let id = products.length;
		res.render("partial/register/redireccion2", {
			userLoggedPlayer: req.session.userLoggedPlayer,
			id
		});

	},

	// Update - Form to edit
	edit: (req, res) => {

		let id = req.params.id
		let product = products.find(product => product.id == id)

		res.render("partial/register/editPlayerForm", {
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

		res.redirect("/userPlayer/perfilDeJugador/" + req.session.userLoggedPlayer)

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