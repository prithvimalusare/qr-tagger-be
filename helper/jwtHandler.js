const jwt = require('jsonwebtoken')

let createToken = (payload, secret, expiry) => {
    return jwt.sign(payload, secret, expiry?{expiresIn: expiry}:null )
}

let verifyToken = async (token, secret) => {
    let isValid;
    try {
        await jwt.verify(token, secret);
        isValid = true;
    } catch (error) {
        isValid = false;
    }
    return isValid;
}


module.exports = {
    createToken, verifyToken
}

// , (err, payload)=>{
//     if(err){ isValid = false }
//     else{ isValid = true
//     }
//     console.log('reached here')
//     return isValid
// }