const { google } = require('googleapis');
const MailComposer = require('nodemailer/lib/mail-composer');
const {
    GMAIL_CLIENT_SECRET,
    GMAIL_CLIENT_ID,
    GMAIL_CLIENT_REDIRECT_URI,
    GMAIL_TOKEN_TYPE, GMAIL_ACCESS_TOKEN, GMAIL_EXPIRY_DATE, GMAIL_REFRESH_TOKEN, GMAIL_SCOPE } = require('../envVars')

const getGmailService = () => {
    const oAuth2Client = new google.auth.OAuth2(GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET, GMAIL_CLIENT_REDIRECT_URI);
    oAuth2Client.setCredentials({
        access_token: GMAIL_ACCESS_TOKEN,
        refresh_token: GMAIL_REFRESH_TOKEN,
        scope: GMAIL_SCOPE,
        token_type: GMAIL_TOKEN_TYPE,
        expiry_date: GMAIL_EXPIRY_DATE
    });
    const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });
    return gmail;
};

const encodeMessage = (message) => {
    return Buffer.from(message).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};

const createMail = async (options) => {
    const mailComposer = new MailComposer(options);
    const message = await mailComposer.compile().build();
    return encodeMessage(message);
};

const sendMail = async (options) => {
    try {
        const gmail = getGmailService();
        const rawMessage = await createMail(options);
        const { data: { id } = {} } = await gmail.users.messages.send({
            userId: 'me',
            resource: {
                raw: rawMessage,
            },
        });
        console.log('email sent: ', id)
        return id;

    } catch (error) {
        console.error(error);
        return null
    }
};

module.exports = sendMail;