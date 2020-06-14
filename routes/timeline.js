//Import Router from express
const express = require('express');
const router = express.Router();
const axios = require('axios');
const crypto = require('crypto');
const OAuth = require('oauth-1.0a');

const oauth = OAuth({
    consumer: { key: `${process.env.OAUTH_CONSUMER_KEY}`, secret: `${process.env.OAUTH_CONSUMER_SECRET}` },
    signature_method: 'HMAC-SHA1',
    hash_function(base_string, key) {
        return crypto
            .createHmac('sha1', key)
            .update(base_string)
            .digest('base64')
    },
});

const token = {
    key: `${process.env.OAUTH_TOKEN}`,
    secret: `${process.env.OAUTH_TOKEN_SECRET}`,
};

//Get tweets of given username for given count
router.get('/:username/:count', async (req, res) => {
    const request_data = {
        url: `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${req.params.username}&count=${req.params.count}`,
        method: 'get'
    };
    var config = {
        method: `${request_data.method}`,
        url: `${request_data.url}`,
        headers: {
            Authorization: oauth.toHeader(oauth.authorize(request_data, token)).Authorization,
            Cookie: 'lang=en; personalization_id="v1_gFujxRtMBrNGdUudu4BPvw=="; guest_id=v1%3A159216200218154542'
        }
    };
    axios(config)
        .then(function (response) {
            res.send(JSON.stringify(response.data));
        })
        .catch(function (error) {
            res.status(error.response.status).send(error);
        });
});

//Get all tweets of given username
router.get('/:username', async (req, res) => {
    const request_data = {
        url: `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${req.params.username}`,
        method: 'get'
    };
    var config = {
        method: `${request_data.method}`,
        url: `${request_data.url}`,
        headers: {
            Authorization: oauth.toHeader(oauth.authorize(request_data, token)).Authorization,
            Cookie: 'lang=en; personalization_id="v1_gFujxRtMBrNGdUudu4BPvw=="; guest_id=v1%3A159216200218154542'
        }
    };
    axios(config)
        .then(function (response) {
            res.send(JSON.stringify(response.data));
        })
        .catch(function (error) {
            res.status(error.response.status).send(error);
        });
});

//Export to be used as middleware
module.exports = router;