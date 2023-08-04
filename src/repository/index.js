import ContactsDao from '../daos/factoryDAO.js';
import ContactRepository from './contacts.repository.js';

const contactDao = new ContactsDao();

export const contactsService = new ContactRepository(contactDao)