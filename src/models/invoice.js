
const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    size: { type: String },
    quantity: { type: Number, required: true },
    pricePerUnit: { type: Number, required: true }
});


const invoiceSchema = new mongoose.Schema({
    billedTo: { type: String, required: true },
    companyName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    orderNumber: { type: String, required: true },
    dateOfOrder: { type: Date, required: true },
    dateOfDelivery: { type: Date, required: true },
    products: [productSchema],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Invoice', invoiceSchema);
