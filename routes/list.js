//Import Router from express
const express = require('express');
const router = express.Router();
const scraper = require('scrape-twitter');

//Get tweets from list for given count
router.get('/:uid/:list/:count', async (req, res) => {
    console.log(req.params);
    async function readResult(stream) {
        console.log('Reading tweets...');
        const chunks = [];
        for await (const chunk of stream) {
            let tempObj = {
                id: chunk.id,
                screenName: chunk.screenName,
                time: chunk.time,
                text: chunk.text,
                images: chunk.images,
                urls: chunk.urls,
                retweetCount: chunk.retweetCount,
                favoriteCount: chunk.favoriteCount
            }
            chunks.push(tempObj);
        }
        console.log('Done');
        return chunks;
    }
    console.log('Fetching tweets...');

    var result = new scraper.ListStream(req.params.uid, req.params.list, { count: req.params.count });
    readResult(result).then(data => {
        res.json(data);
    }).catch(error => {
        if(!error.response)
            res.status(500).json(error);
        res.status(error.response.status).send(error.response.statusText);
    });
});

//Get all tweets from list
router.get('/:uid/:list', async (req, res) => {
    console.log(req.params);
    async function readResult(stream) {
        console.log('Reading tweets...');
        const chunks = [];
        for await (const chunk of stream) {
            let tempObj = {
                id: chunk.id,
                screenName: chunk.screenName,
                time: chunk.time,
                text: chunk.text,
                images: chunk.images,
                urls: chunk.urls,
                retweetCount: chunk.retweetCount,
                favoriteCount: chunk.favoriteCount
            }
            chunks.push(tempObj);
        }
        console.log('Done');
        return chunks;
    }
    console.log('Fetching tweets...');
    let result = new scraper.ListStream(req.params.uid, req.params.list);
    readResult(result).then(data => {
        res.json(data);
    }).catch(error => {
        if(!error.response)
            res.status(500).json(error);
        res.status(error.response.status).send(error.response.statusText);
    });
});

//Export to be used as middleware
module.exports = router;