const nodemailer = require('nodemailer');

 async function send() {
    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
        host: 'smtp.126.com',
        secureConnection: true, // use SSL
        secure: true,
        port: 465,
        auth: {
            user: 'biruicloud@126.com',
            pass: 'Brjy123456',
        }
    });

    // Message object
    let message = {
        from: 'biruicloud <biruicloud@126.com>',

        // Comma separated list of recipients
        to: 'Andris Reinman <maple0421@163.com>',
        bcc: 'maple0421@163.com',

        // Subject of the message
        subject: 'Nodemailer is unicode friendly ✔',

        // plaintext body
        text: 'Hello to myself!',

        // HTML body
        html:
            '<p><b>Hello</b> to myself <img src="cid:note@example.com"/></p>' +
            '<p>Here\'s a nyan cat for you as an embedded attachment:<br/><img src="cid:nyan@example.com"/></p>',

        // An array of attachments
        // attachments: [
        //     // String attachment
        //     {
        //         filename: 'notes.txt',
        //         content: 'Some notes about this e-mail',
        //         contentType: 'text/plain' // optional, would be detected from the filename
        //     },
        // ]
    };

    let info = await transporter.sendMail(message);
    console.log('Message sent successfully as %s', info.messageId);
}

module.exports =send