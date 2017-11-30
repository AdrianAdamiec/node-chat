let expect = require('expect');
const request = require('supertest');
const {app} = require('./../server');
let {generateMessage, generateLocationMessage} = require('./message');

let messages = [{
    from: 'Admin',
    text: 'Welcome'
},{
    from: 'User1',
    text: 'Hey'
}];

describe('generateMessage', () => {
   it('should generate correct message object', () => {

       let res = generateMessage(messages[0].from, messages[0].text);
       let newMessage = res;
       expect(newMessage.from).toMatch(messages[0].from);
       expect(newMessage.text).toMatch(messages[0].text);
       expect(typeof newMessage.createdAt).toBe('number');
   })
});

describe('generateLocationMessage', () => {
    it('should generate correct location message object', () => {

        let coords = {
            latitude: 1,
            longitude: 1
        };

        let url = 'https://www.google.com/maps?q=1,1';

        let res = generateLocationMessage(messages[0].from, coords.latitude, coords.longitude);
        let newMessage = res;
        expect(newMessage.from).toMatch(messages[0].from);
        expect(newMessage.link).toMatch(url);
        expect(typeof newMessage.createdAt).toBe('number');
    })
});