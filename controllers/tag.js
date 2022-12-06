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
        res.status(201).json({
            'message': 'Tag created successfully',
            'Tag': {
                "tag_uid": created_tag.tag_uid,
                "name": created_tag.name
            }
        })
    }

}

tagController.update = async (req, res, next) => {
    let tag = null;
    try {
        tag = await Tag.findOne({
            where: {
                tag_uid: req.params.tag_uid,
                user_uid: req.user.user_uid
            },
            attributes: ['tag_uid']
        });
        if (tag) {
            tag = await Tag.update(
                { name: req.body.name },
                { where: {
                        tag_uid: req.params.tag_uid,
                        user_uid: req.user.user_uid
                    },
                  returning: true
                }
            );
            tag = tag ? tag[1] ? tag[1][0] : null : null;
            res.status(200).json({
                'message': 'Tag updated',
                'Tag': {
                    "tag_uid": tag.tag_uid,
                    "name": tag.name,
                }
            })
        }
        else {
            res.status(404).json({
                'message': 'Invalid tag_uid'
            })
        }
    } catch (error) {
        next(error);
    }
}

tagController.delete = async (req, res, next) => {
    let tag = null;
    try {
        tag = await Tag.findOne({
            where: {
                tag_uid: req.params.tag_uid,
                user_uid: req.user.user_uid
            },
            attributes: ['tag_uid']
        });
        if (tag) {
            
            let deleted = await Tag.destroy({
                where: {
                    tag_uid: req.params.tag_uid,
                    user_uid: req.user.user_uid
                }
            });
            if (deleted) {
                res.status(200).json({
                    'message': 'Tag deleted',
                    'tag_uid': req.params.tag_uid
                })
            } else {
                res.status(404).json({
                    'message': 'Tag not deleted',
                    'tag_uid': req.params.tag_uid
                })
            }
        }
        else {
            res.status(404).json({
                'message': 'no tag found'
            })
        }
    } catch (error) {
        next(error);
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
        else {
            res.status(404).json({
                'message': 'no tag found'
            })
        }
    } catch (error) {
        next(error);
    }


}

module.exports = tagController