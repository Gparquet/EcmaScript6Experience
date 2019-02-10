import { findContactById } from './contact.service';


describe('contact.service tests', ()=>{

    test('should specific contact when search 49530bb5-8d36-4cec-a182-759d006ad292 id in findContactById function ', ()=>{
        const contactId = '49530bb5-8d36-4cec-a182-759d006ad292';
        
        const contact  = findContactById(contactId);

        const { firstName, lastName, phoneNumber, mail} = contact;
        expect(firstName).toBe('Jean');
        expect(lastName).toBe('Phil');
        expect(phoneNumber).toBe('0636656562');
        expect(mail).toBe('jPhil@es6exp.com');
    });
});