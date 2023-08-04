import config from '../config/config.js';
import mongoose from 'mongoose';

let ContactsDAO;

switch (config.persistencia) {
    case 'MONGO':
        await mongoose.connect('mongodb+srv://coderhouse:coder123456@coderhouse.z88zdi9.mongodb.net/persistencia?retryWrites=true&w=majority');
        const { default: ContactsMongo } = await import('./contactsDAOMongo.js')
        ContactsDAO = ContactsMongo;
        break;
    case 'MEM':
        const {default: ContactsMem } = await import('./contactsDAOMem.js');
        ContactsDAO = ContactsMem
        break;

}

export default ContactsDAO;