import { findContactById, findContactsByFirstAndLastName } from './contact.service';


describe('contact.service tests', ()=>{

    test('should specific contact when search 49530bb5-8d36-4cec-a182-759d006ad292 id in findContactById function ', ()=>{
        const contactId = '49530bb5-8d36-4cec-a182-759d006ad292';
        
        const result  = findContactById(contactId);

        const { contact: {firstName, lastName, phoneNumber, mail}, message} = result;
        expect(firstName).toBe('Jean');
        expect(lastName).toBe('Phil');
        expect(phoneNumber).toBe('0636656562');
        expect(mail).toBe('jPhil@es6exp.com');
        expect(message).toBe('');
    });

    test('should return error message when pass 1234 id in findContactById function ', ()=>{
        const contactId = '1234';
        
        const result  = findContactById(contactId);

        const {contact, message} = result;
        expect(contact).toBe(undefined);
        expect(message).toBe(`Contact with id property and value : ${contactId} not found`);
    });

    test('should return two contact when pass Bambelle Lary in findContactsByFirstAndLastName function ', ()=>{
        const firstName = 'Larry';
        const lastName = 'Bambelle';

        const result  = findContactsByFirstAndLastName(firstName, lastName);

        const {contacts, message}= result;
        expect(contacts.length).toBe(2);
        expect(message).toBe('');
    });

    test('should return error message when pass toto tata in findContactsByFirstAndLastName function ', ()=>{
        const firstName = 'toto';
        const lastName = 'tata';

        const result  = findContactsByFirstAndLastName(firstName, lastName);

        const { contacts, message} = result;
        expect(contacts).toEqual([]);
        expect(message).toBe(`Users with first name : ${firstName} and lastName : ${lastName} not found`);
    });
});