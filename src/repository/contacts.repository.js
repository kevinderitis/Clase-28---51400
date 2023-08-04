import ContactsDTO from "../daos/DTOs/contact.dto.js";

export default class ContactRepository{
    constructor(dao){
        this.dao = dao;
    }

    get = async () => {
        let contact = this.dao.get()
        return contact;
    };

    create = async contact => {
        let newContact = new ContactsDTO(contact);
        let result = await this.dao.create(newContact)
        return result;
    }
}