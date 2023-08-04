import { Router } from 'express';
import ContactsDTO from '../daos/DTOs/contact.dto.js';
import ContactsServices from '../services/contacts.js';

const contactRouter = Router();
const contactService = new ContactsServices()

contactRouter.get('/', async (req, res) => {
    let contacts = await contactService.get()
    res.send(contacts)
})

contactRouter.post('/', async (req, res) => {
    const contact = new ContactsDTO(req.body)
    let newContact = await contactService.create(contact)
    res.send(newContact)
})

export default contactRouter;