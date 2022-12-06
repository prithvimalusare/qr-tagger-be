let {verifyToken, decodeToken} = require('../helper/jwtHandler');
let { ACCESS_TOKEN_SECRET } = require('../envVars')


module.exports = {
    authorizeToken :  async (req, res, next) => {
        let access_token = req.headers['authorization'] ? req.headers['authorization'].split(' ')[1]: "" ;

        if(!access_token){
            res.status(403).json({error:'Access token missing'})
        }

        let token_valid = await verifyToken(access_token, ACCESS_TOKEN_SECRET);
        if(!token_valid){
            res.status(403).json({error:'Access token invalid'})
        }
        else{
            let user = await decodeToken(access_token, ACCESS_TOKEN_SECRET);
            if (!user) {
                res.status(403).json({error:'Access token invalid'})
            } else {
                req.user = user;
                next()
            }
        }
    }
}