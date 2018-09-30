const _ = require('lodash');
const uuidv4 = require('uuid/v4');

const contacts = require('./contact.json');

const commonFind = (allContact) => (propertyName, propertyValue) => {
    
     const userFounded = _.filter(allContact, (currentContact) => {
        return currentContact[propertyName] === propertyValue;
    });

    if(userFounded) {
        return userFounded;
    }
    return `User ${firstName} ${lastName} not found`;
};


const allContact = ()=>{
    return contacts;
};

const findContactById = (allContacts = contacts.data) => (id) => {
    return commonFind(allContacts)('id', id);
};

const findContactsByFirstAndLastName = (allContacts = contacts.data) => (firstName, lastName) => {
    const userFounded = _.find(allContacts, (currentContact) => {
        return currentContact.firstName === firstName && currentContact.lastName === lastName;
    });

    if(userFounded) {
        return userFounded;
    }
    return `User ${firstName} ${lastName} not found`;
};

const findContactsByLastName = (allContacts = contacts.data) => (lastName) => {
    return commonFind(allContacts)('lastName', lastName);
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

const updateContact = () => {
    
};

module.exports = {
    findContactById: findContactById(),
    allContact: allContact,
    findContactsByFirstAndLastName: findContactsByFirstAndLastName(),
    addNewContact: addNewContact()
}