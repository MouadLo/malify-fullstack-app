const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
//const cleanCache = require('../middlewares/cleanCache');

const Product = mongoose.model('Product');

module.exports = (app) => {
	app.get('/api/product/:id', requireLogin, async (req, res) => {
		const product = await Product.findOne({
			_user: req.user.id,
			_id: req.params.id,
		});

		res.send(product);
	});

	app.get('/api/products', requireLogin, async (req, res) => {
		const products = await Product.find({ _user: req.user.id });
		res.status(200).send(products);
	});

	app.post('/api/product', requireLogin, async (req, res) => {
		const { title, collections, vendor, price, tva, barcode } = req.body;

		const newProduct = {
			title,
			price,
			tva,
			collections,
			vendor,
			barcode,
			_user: req.user.id,
		};
		const product = new Product(newProduct);

		try {
			await product.save();
			res.send(product);
		} catch (err) {
			res.send(400, err);
		}
	});

	app.put('/api/product/:id', async (req, res) => {
		let id = req.params.id;
		const { title, collections, vendor, price, tva, barcode } = req.body;
		try {
			const product = await Product.findByIdAndUpdate(id, {
				title,
				collections,
				vendor,
				price,
				tva,
				barcode,
			});
			res.send(product);
		} catch (err) {
			res.send(400, err);
		}
	});

	app.delete('/api/product/:id', async (req, res) => {
		let id = req.params.id;

		try {
			const product = await Product.remove({
				_id: id,
			});

			res.send({});
		} catch (err) {
			res.send(400, err);
		}
	});
};
