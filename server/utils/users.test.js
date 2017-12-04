const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Adi',
            room: 'Test1',
        },{
            id: '2',
            name: 'Mike',
            room: 'Test2',
        },{
            id: '3',
            name: 'Fred',
            room: 'Test1',
        }];
    });

    it('should add new User', () => {
        let users = new Users();
        let user = {
            id: '123',
            name: 'Adrian',
            room: 'test'
        };

        let res = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        let res = users.removeUser('1');
        expect(res.id).toEqual('1');
        expect(users.users.length).toEqual(2);
    });

    it('should not remove a user', () => {
        let res = users.removeUser('123');
        expect(users.users.length).toEqual(3);
    });

    it('should find user', () => {
        let user = users.getUser('2');
        expect(user.id).toBe('2');
    });

    it('should not find user', () => {
        let user = users.getUser('212');
        expect(user).toBe(undefined);
    });

    it('should return names for Test1 room', () => {
        let userList = users.getUserList('Test1');

        expect(userList).toEqual(['Adi', 'Fred'])
    });

    it('should return names for Test2 room', () => {
        let userList = users.getUserList('Test2');

        expect(userList).toEqual(['Mike'])
    });
});