import { contactModel } from "./models/contacts.js"

export default class ContactsDAOMongo {
    constructor(){}

    get = async () => {
        try {
            const contacts = await contactModel.find();
            return contacts;
        } catch (error) {
            console.log(error)
            throw new Error('Error fetching contacts from Mongo')
        }
       
    }

    create = async contact => {
        try {
            const newContact = await contactModel.create(contact);
            return newContact;
        } catch (error) {
            console.log(error)
            throw new Error('Error creating contact')
        }
    }

    update = async (contact, id) => {
        try {
            const updatedContact = await contactModel.updateOne({_id: id}, contact);
            return updatedContact;
        } catch (error) {
            console.log(error)
            throw new Error('Error udpating contact')
        }
    }

    delete = async id => {
        try {
            const deletedContact = await contactModel.deleteOne({ _id: id})
            return deletedContact;
        } catch (error) {
            console.log(error)
            throw new Error('Error deleting contact')
        }
    }
}