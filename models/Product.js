const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
	title: String,
	collections: String,
	price: Number,
	tva: Number,
	vendor: String,
	barcode: String,
	imageUrl: String,
	createdAt: { type: Date, default: Date.now },
	_user: { type: Schema.Types.ObjectId, ref: 'User' },
});

mongoose.model('Product', productSchema);
