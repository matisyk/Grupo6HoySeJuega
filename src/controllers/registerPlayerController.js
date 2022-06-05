const fs = require('fs');
const path = require('path');

const playersFilePath = path.join(__dirname, '../database/userPlayerDataBase.json');
const player = JSON.parse(fs.readFileSync(playersFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {

	// Create - Form to create
	create: (req, res) => {

		res.render("partial/register/formularioDatosJugador")

	},
	
	// Create -  Method to store
	store: (req, res) => {

		let imagen;
		if(req.files[0] != undefined){
			imagen = req.files[0].filename;
		}else{
			imagen = "estrella-gris.png";
		}

		let newplayer = {
			id: player[player.length - 1].id + 1,
			...req.body, 
			imagen: imagen
		}

		player.push(newplayer);

		fs.writeFileSync(playersFilePath, JSON.stringify(player, null, ''));
		
		res.redirect("/userPlayer/perfilDeJugador");

	},

	// Update - Form to edit
	edit: (req, res) => {
		
		let id = req.params.id
		let player = player.find(player => player.id == id)

		res.render("editarCancha", {player})

	},
	// Update - Method to update
	update: (req, res) => {
	
		let id = req.params.id
		let playerToEdit = player.find(player => player.id == id)

		
		console.log("🚀 ~ file: playerController.js ~ line 78 ~ req.files", req.files)


		let imagen
		if(req.files[0] != undefined){
			imagen = req.files[0].filename
		}else{
			imagen = playerToEdit.imagen
		}
		
		
		playerToEdit = {
			id: playerToEdit.id,
			...req.body,
			imagen: imagen,
		}
		
		let newplayer = player.map(player => {

			if (player.id == playerToEdit.id) {

				return player = {...playerToEdit};
			}

			return player
		})


		fs.writeFileSync(playersFilePath, JSON.stringify(newplayer));

		res.redirect("/player/detail/" + playerToEdit.id)

	},

	// Delete - Delete one player from DB
	destroy : (req, res) => {
		
		let id = req.params.id
		let playerToDelete = player.filter(player => player.id != id)

		fs.writeFileSync(playersFilePath, JSON.stringify(playerToDelete));

		res.redirect("/")

	}
};

module.exports = controller;
