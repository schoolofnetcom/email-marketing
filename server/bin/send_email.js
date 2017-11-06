const connection = require('../src/db/connection');
const sender = require('../src/email/sender');
const campaignModel = require('../src/models/campaign');
const leadModel = require('../src/models/lead');
const tracker = require('../src/email/tracker');

async function send() {
    const now = new Date();
    const campaigns = await campaignModel.find({start: {$lt: now}, status: null});

    for (let i = 0; i < campaigns.length; i++) {
        console.log('send campaign')
        let lists = campaigns[i].lists;

        let leads = await leadModel.find({ lists: {$in: lists}});

        leads.map((lead) => {
            console.log('send lead')
            let mailBody = tracker(campaigns[i].body, campaigns[i]._id, lead._id);
            console.log(lead.email, campaigns[i].title, mailBody);
            sender(lead.email, campaigns[i].title, mailBody); //envia o email
        });

        campaigns[i].status = 'enviado';
        campaigns[i].save();


        console.log('end')
    }
}

module.exports = send;
