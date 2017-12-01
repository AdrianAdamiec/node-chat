const moment = require('moment');

let generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: moment().valueOf()
    }
};
let generateLocationMessage = (from, latitude, longitude) => {
    let link = `https://www.google.com/maps?q=${latitude},${longitude}`;
    return {from, link, createdAt: moment().valueOf()}
};
module.exports = {generateMessage, generateLocationMessage};