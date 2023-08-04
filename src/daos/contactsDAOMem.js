export default class ContactsDAOMem {
    constructor(){
        this.contacts = [];
    }

    get = async () => {
        return this.contacts;
    }

    create = async contact => {
        this.contacts.push(contact);
        return contact;
    }

    update = async (contact, id) => {
        const index = this.contacts.findIndex(contact => contact.id === id);
        if(index !== -1){
            this.contacts[index] = { ...this.contacts[index], ...contact}
            return this.contacts[index]
        }   
        return null;

    }

    delete = async id => {
        const index = this.contacts.findIndex(contact => contact.id === id); 
        if(index !== -1){
            const deletedContact = this.contacts.splice(index, 1);
            return deletedContact;
        }
        return null;
    }
}