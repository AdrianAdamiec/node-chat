let expect = require('expect');
const request = require('supertest');
const {app} = require('./../server');
let {generateMessage} = require('./message');

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