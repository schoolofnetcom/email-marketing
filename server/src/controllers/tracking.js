const campaignModel = require('../models/campaign');
const leadModel = require('../models/lead');

module.exports = function () {
    let open = function (req, res) {
        let campaignId = req.params.id;
        let leadId = req.params.leadid;

        campaignModel.findById(campaignId, function (err, campaign) {
            if (err) {
                return err;
            }

            campaign.opens += 1;
            campaign.save();
        });

        leadModel.findById(leadId, function (err, lead) {
            if (err) {
                return err;
            }

            if (!lead) {
                return;
            }

            let actions = lead.actions;
            actions.push({
                campaign: campaignId,
                action: [{
                    typeAction: 'open',
                    link: '',
                    date: new Date()
                }]
            });

            lead.actions = actions;
            lead.save();
        });

        let buf = new Buffer(35);
        res.writeHead(200, { 'Content-Type': 'image/gif' });
        res.end(buf, 'binary');
    }

    let click = function (req, res) {
        if (!req.query.link) {
            return res.status(404).send('Not found');
        }

        let campaignId = req.params.id;
        let leadId = req.params.leadid;

        campaignModel.findById(campaignId, function (err, campaign) {
            if (err) {
                return err;
            }

            campaign.clicks += 1;
            campaign.save();
        });

        leadModel.findById(leadId, function (err, lead) {
            if (err) {
                return err;
            }

            if (!lead) {
                return;
            }

            let actions = lead.actions;
            actions.push({
                campaign: campaignId,
                action: [{
                    typeAction: 'click',
                    link: req.query.link,
                    date: new Date()
                }]
            });

            lead.actions = actions;
            lead.save();
        });

        res.writeHead(302, {
            'Location': req.query.link
        });
        res.end();
    }

    let controller = {
        open: open,
        click: click
    }

    return controller;
}
