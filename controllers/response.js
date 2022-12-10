let { Tag, Response, User } = require('../database/models')
let sendMail = require('../helper/sendMail')
let tagController = {}

tagController.create = async (req, res, next) => {
    try {

        let { full_name, email, phone, message } = req.body;
        let tag_uid = req.params.tag_uid

        let tag = await Tag.findOne({ where: { tag_uid }, include: User });
        if (!tag) { res.status(404).json({ 'message': 'tag not found for tag_uid: ' + tag_uid }) }

        let response = await Response.create({
            full_name,
            email,
            phone,
            message,
            tag_uid,
        })

        const options = {
            to: tag.User.email,
            cc: '',
            replyTo: email,
            subject: `🔥 You have a response on Tag: ${tag.name} from ${full_name} 🔥`,
            text: 'Please check your tagger dashboard for more information.',
            html: `<p>Please check your tagger dashboard for more information.</p>`,
            textEncoding: 'base64'
        };

        await sendMail(options);

        res.status(200).json({
            message: 'Response recorded successfully',
            Response: {
                response_uid: response.response_uid,
                full_name: response.full_name,
                email: response.email,
                phone: response.phone,
                message: response.message,
                tag_uid: response.tag_uid
            }
        })
    } catch (error) {
        next(error);
    }
}

tagController.getAll = async (req, res, next) => {
    try {

        let tag_uid = req.params.tag_uid

        let tag = await Tag.findOne({
            where: { tag_uid }, 
            attributes: {
                exclude: ['created_at', 'updated_at', 'deleted_at', 'user_uid']
            },
            include: {
                model: Response,
                attributes: {
                    exclude: ['created_at', 'updated_at', 'deleted_at', 'tag_uid']
                }
            }
        });
        if (!tag) { res.status(404).json({ 'message': 'tag not found for tag_uid: ' + tag_uid }) }


        res.status(200).json({
            message: 'Response recorded successfully',
            Tag: tag
        })
    } catch (error) {
        next(error);
    }
}

module.exports = tagController