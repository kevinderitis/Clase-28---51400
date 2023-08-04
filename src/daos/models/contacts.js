import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    full_name: String, 
    active: Boolean
})

export const contactModel = mongoose.model('contacts', contactSchema)