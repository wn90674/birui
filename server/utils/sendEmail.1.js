const nodemailer = require("nodemailer");

// 参数：发件人，收件人，主题，正文（支持html格式）
function sendMail(from, aliasName, tos, subject, msg) {
    const smtpTransport = nodemailer.createTransport({
        host: 'smtp.126.com',
        secureConnection: false, // use SSL
        secure: false,
        port: 465,
        auth: {
            user: from,
            pass: 'Brjy123456',
        }
    });

    smtpTransport.sendMail({
        //from    : '标题别名 <foobar@latelee.org>',
        from: aliasName + ' ' + '<' + from + '>',
        //'li@latelee.org, latelee@163.com',//收件人邮箱，多个邮箱地址间用英文逗号隔开
        to: tos,
        subject: subject, //邮件主题
        //text    : msg,
        html: msg
    }, function (err, res) {
        if (err) {
            console.log('error: ', err);
            return -1
        }
        return 1
    });
}

function nl2br(str, isXhtml) {
    var breakTag = (isXhtml || typeof isXhtml === 'undefined') ? '<br />' : '<br>';
    var str = (str + '').replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
};

module.exports = function() {
    sendMail('biruicloud@126.com', 'nodejs机器人', "maple0421@163.com",
        '这是邮件标题',
        '这是正文。<h2> 我的主页：</h2> 地址为：<a href= www.latelee.org" target="_blank">www.latelee.org</a></br>');
}