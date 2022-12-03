let {verifyToken} = require('../helper/jwtHandler');
let { ACCESS_TOKEN_SECRET } = require('../envVars')


module.exports = {
    authorizeToken :  async (req, res, next) => {
        let access_token = req.headers['authorization'] ? req.headers['authorization'].split(' ')[1]: "" ;
        let token_valid = await verifyToken(access_token, ACCESS_TOKEN_SECRET);
        if(!token_valid){
            res.status(403).json({error:'Access token invalid'})
        }
        else{
            next()
        }
    }
}