const jwt = require('jsonwebtoken')

let createToken = (payload, secret, expiry) => {
    return jwt.sign(payload, secret, expiry? {expiresIn: expiry} : null )
}

let verifyToken = async (token, secret) => {
    let isValid;
    try {
        isValid = await jwt.verify(token, secret);
    } catch (error) {
        isValid = false;
    }
    return isValid;
}

let decodeToken = async (token, secret) => {
    let decodedToken = null;
    try {
        decodedToken = await jwt.decode(token, secret)    
    } catch (error) {
        console.log(error)
    }
    return decodedToken
}

module.exports = {
    createToken, verifyToken, decodeToken
}