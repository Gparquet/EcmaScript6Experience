const uuidv4 = require('uuid/v4');

const contacts = require('./contact.json');

const commonFind = allContact => (propertyName, value) => {
    const contactFounded = allContact.find(currentContact=>currentContact[propertyName] === value);

    if(contactFounded) {
        return { contact: contactFounded, message: ''};
    }
    return { contact: contactFounded, message: `Contact with ${propertyName} property and value : ${value} not found`};
};


const allContact = ()=>{
    return contacts;
};

const findContactById = (allContacts = contacts.data) => (id) => {
    return commonFind(allContacts)('id', id);
};

const findContactsByFirstAndLastName = (allContacts = contacts.data) => (firstName, lastName) => {
    const contactsFounded = allContacts.filter(currentContact=>currentContact.firstName === firstName && currentContact.lastName === lastName);

    if(contactsFounded.length === 0) {
        return { contacts: contactsFounded, message: `Users with first name : ${firstName} and lastName : ${lastName} not found`};
    }
    return {contacts: contactsFounded, message :''};
};

const addNewContact = (allContacts = contacts.data) => (contact) => {
    let allContactTemp = allContacts;
    const {firstName, lastName, phoneNumber, email} = contact;

    const existedContact = findContactsByFirstAndLastName(allContactTemp)
        (firstName, lastName);

    if (!existedContact.firstName) {
        allContacts.push({
            id: uuidv4(),
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            email: email
        });
        return allContactTemp;
    }

    return {
        errorMessage: `This Contact with firstName : ${contact.firstName} and lastName : ${contact.lastName}`
    }
};

module.exports = {
    findContactById: findContactById(),
    allContact: allContact,
    findContactsByFirstAndLastName: findContactsByFirstAndLastName(),
    addNewContact: addNewContact()
}