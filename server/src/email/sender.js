const mailgun = require('mailgun.js');
const mg = mailgun.client({ username: 'api', key: 'key-0f2a31431a7103040130a041a3f55d68'});

module.exports = function (to, subject, html) {
    return mg.messages
        .create('sandboxfc1f1f6147f940d989885d8bbccf7995.mailgun.org', {
            from: 'Minha empresa <erik@erikf.org.br>',
            to: [to],
            subject: subject,
            html: html
        })
        .then(msg => console.log(msg))
        .catch(err => console.log(err));
}
