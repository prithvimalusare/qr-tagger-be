let { Tag } = require('../database/models')

let tagController = {}

tagController.create = async (req, res, next) => {
    const tag_name = req.body.name;
    let created_tag;
    try {
        created_tag = await Tag.create({
            name: tag_name,
            user_uid: req.user.user_uid
        });
    } catch (error) {
        next(error);
    }
    if (created_tag) {
        res.status(200).json({
            'message': 'Tag created successfully',
            'Tag': {
                "tag_uid": created_tag.tag_uid,
                "name": created_tag.name
            }
        })
    }

}

tagController.getAll = async (req, res, next) => {
    let all_tags = [];
    try {
        all_tags = await Tag.findAll({ 
            where: { user_uid: req.user.user_uid }, 
            attributes: ['tag_uid', 'name', 'user_uid'] 
        });
    } catch (error) {
        next(error);
    }
    if (all_tags.length) {
        res.status(200).json({
            'message': 'Tags found',
            'Tags': all_tags
        })
    } else {
        res.status(404).json({
            'message': 'no tags found'
        })
    }

}

tagController.getOne = async (req, res, next) => {
    let tag = null;
    try {
        tag = await Tag.findOne({ 
            where: { 
                tag_uid: req.params.tag_uid,
                user_uid: req.user.user_uid
             }, 
            attributes: ['tag_uid', 'name', 'user_uid'] 
        });
        if (tag) {
            res.status(200).json({
                'message': 'Tag found',
                'Tag': tag
            })
        }
        else{
            res.status(404).json({
                'message': 'no tag found'
            })
        }
    } catch (error) {
        next(error);
    }
   

}

module.exports = tagController