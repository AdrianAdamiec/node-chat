let generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: new Date().getTime()
    }
};
let generateLocationMessage = (from, latitude, longitude) => {
    let link = `https://www.google.com/maps?q=${latitude},${longitude}`;
    return {from, link, createdAt: new Date().getTime()}
};
module.exports = {generateMessage, generateLocationMessage};