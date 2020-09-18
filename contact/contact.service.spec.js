import { findContactById, findContactsByFirstAndLastName, loadNameAndLastName } from './contact.service';

describe('Contact.services tests', ()=>{

    test('should return two contacts when call findContactsByFirstAndLastName function with param larry bambelle', ()=>{
        //act 
        const firstName = 'Larry';
        const lastName = 'Bambelle';
        //Arrange 
        const result = findContactsByFirstAndLastName(firstName, lastName);
        //Assert
        expect(result.contacts.length).toBe(1);
    });
});

describe('Contact.services tests 2', ()=>{
    test('Return name and last of user filled', ()=>{
        
        var result = loadNameAndLastName('Jean', 'Phil');

        expect("Hello Jean Phil").toBe(result);
    });
})