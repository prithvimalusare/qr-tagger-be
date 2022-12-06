let {Tag} = require('../database/models')

let tagController = {}

tagController.create = async(req, res, next) => {
    const tag_name = req.body.name;
    let created_tag;
    try {
        created_tag = await Tag.create({
            name: tag_name,
            user_uid : req.user.user_uid
        });
    } catch (error) {
        next(error);
    }
    if(created_tag){
        res.status(200).json({
            'message': 'Tag created successfully',
            'Tag': {
                "tag_uid": created_tag.tag_uid,
                "name": created_tag.name
            }
        })
    }
    
}

module.exports = tagController