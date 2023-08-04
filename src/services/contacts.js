import { contactsService } from '../repository/index.js';


export default class ContactsServices {
    constructor(){
        this.dao = contactsService
    }

    get = async () => {
        let contacts = await this.dao.get();
        return contacts;
    }

    create = async contact => {
        let newContact = await this.dao.create(contact);
        return newContact;
    }
}