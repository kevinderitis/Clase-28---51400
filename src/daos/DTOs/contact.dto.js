export default class ContactsDTO {
    constructor(contact){
        this.first_name = contact.first_name,
        this.last_name = contact.last_name,
        this.email = contact.email,
        this.full_name = `${contact.first_name}-${contact.last_name}`,
        this.active = true

    }
}