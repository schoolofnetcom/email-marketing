module.exports = function (body, campaignId, leadId) {
    let img = '<img src="/campaigns/tracking/open/' + campaignId + '/' + leadId + '">';
    let url_tracking = '/campaigns/tracking/click/' + campaignId + '/' + leadId + '?link=';
    let regex = /<a href="(.*?)"/g;

    return body.replace(regex, "<a href=\"" + url_tracking + "$1\"") + img;
}
