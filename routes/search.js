//Import Router from express
const express = require("express");
const router = express.Router();
const scraper = require("scrape-twitter");

//Get tweets of given search term with optional parameters
router.get("/:query/:type?/:count?", async (req, res) => {
	async function readResult(stream) {
		console.log("Reading tweets...");
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
			};
			chunks.push(tempObj);
		}
		console.log("Done");
		return chunks;
	}
	console.log("Scraping tweets...");
	var count = req.query.count;
	if(!count || isNaN(count))
		count = 50;
	var type = req.query.type;
	if(!type || Object.is(type,"top"))
		type = "latest";
	let result = new scraper.TweetStream(req.params.query, type, { count: count });
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