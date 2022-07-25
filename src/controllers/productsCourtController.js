const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/courtDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {


    // Detail - Detail from one product
	detalle: (req, res) => {

		let id = req.params.id
		let product = products.find(product => product.id == id)

		res.render("detalle", {product})

	},

	// Create - Form to create
	create: (req, res) => {

		res.render("partial/userOwner/registrarCancha")

	},
	
	// Create -  Method to store
	store: (req, res) => {

		let image;
		if(req.files[0] != undefined){
			image = req.files[0].filename;
		}else{
			image = "estrella-gris.png";
		}

		Cancha
		.create({
			identificacion: req.body.identificacion,
			capacidad: req.body.capacidad,
			valor: req.body.valor,
			users_owners_id: idOwner,
			deporte_id: idDeporte,
			tipo_de_cancha_id: req.body.tipoDeCancha
		})
		.then((result) => {
			const idCancha = result.id
			TipoDeCancha.create({
				material: req.body.material,
				canchas_id: idCancha
			})

			ImagenCancha.create({
				image: image,
				canchas_id: idCancha
			})

			Deporte.create({
				deporte: req.body.deporte,
				active: req.body.active,
				canchas_id: idCancha
			})

			DiaHorarioCancha.create({
				dias_id: req.body.dias,
				horas_id: req.body.horas,
				canchas_id: idCancha
			})

		})

		.then(() => {
			return res.redirect("/userOwner/loginCourt");
		})
		.catch(error => res.send(error))
	


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

		res.render("partial/userOwner/editarCancha", {product})

	},
	// Update - Method to update
	update: (req, res) => {
	
		let id = req.params.id
		let productToEdit = products.find(product => product.id == id)


		let image
		if(req.files[0] != undefined){
			image = req.files[0].filename
		}else{
			image = productToEdit.image
		}
		
		
		productToEdit = {
			id: productToEdit.id,
			...req.body,
			image: image,
		}
		
		let newProduct = products.map(product => {

			if (product.id == productToEdit.id) {

				return product = {...productToEdit};
			}

			return product
		})


		fs.writeFileSync(productsFilePath, JSON.stringify(newProduct, null, ' '));

			return res.redirect("/userOwner/update")
    


	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let id = req.params.id
		let productToDelete = products.filter(product => product.id != id)

		fs.writeFileSync(productsFilePath, JSON.stringify(productToDelete, null, ' '));

		return res.redirect("/userOwner/update")

	}
};

module.exports = controller;
