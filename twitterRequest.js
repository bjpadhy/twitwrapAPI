const crypto = require('crypto');
const OAuth = require('oauth-1.0a');

//Create OAuth1.0a Headers
class Oauth {
    constructor() {
        this.oauth = OAuth({
            consumer: { key: `${process.env.OAUTH_CONSUMER_KEY}`, secret: `${process.env.OAUTH_CONSUMER_SECRET}` },
            signature_method: 'HMAC-SHA1',
            hash_function(base_string, key) {
                return crypto
                    .createHmac('sha1', key)
                    .update(base_string)
                    .digest('base64')
            },
        });
        this.token = {
            key: `${process.env.OAUTH_TOKEN}`,
            secret: `${process.env.OAUTH_TOKEN_SECRET}`,
        };
    }
}

//Create Timeline Request
function timelineRequest(username, count = 50) {
    const oauth = new Oauth;
    const request_data = {
        method: 'GET',
        url: `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${username}&count=${count}`,
    };
    return {
        method: `${request_data.method}`,
        url: `${request_data.url}`,
        headers: {
            Host: 'api.twitter.com',
            Authorization: oauth.oauth.toHeader(oauth.oauth.authorize(request_data, oauth.token)).Authorization,
            Cookie: 'lang=en; personalization_id="v1_gFujxRtMBrNGdUudu4BPvw=="; guest_id=v1%3A159216200218154542'
        }
    };
};

//Create Error Object
function errorObject(error) {
    return {
        twitterAPIStatus: error.response.status,
        twitterAPIStatusText: error.response.statusText,
        date: error.response.headers.date,
        method: error.response.config.method,
        url: error.response.config.url,
        data: error.response.config.data
    };
};

module.exports = { createRequest: timelineRequest, errorObject: errorObject };