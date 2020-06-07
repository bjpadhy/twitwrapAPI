//Import Router from express
const express = require('express');
const router = express.Router();
const scraper = require('scrape-twitter');

//Get tweets of given username for given count
router.get('/:username/:count', async (req, res) => {
    console.log(req.params);
    async function readResult(stream) {
        console.log('Reading tweets...');
        const chunks = [];
        for await (const chunk of stream) {
            console.log(chunk);
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
    let result = new scraper.TimelineStream(req.params.username, { count: req.params.count });
    readResult(result).then(data => {
        res.json(data);
    }).catch(error => {
        if(!error.response)
            res.status(500).json(error);
        res.status(error.response.status).send(error.response.statusText);
    });
});

//Get all tweets of given username
router.get('/:username', async (req, res) => {
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
    let result = new scraper.TimelineStream(req.params.username);
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