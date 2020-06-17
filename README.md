# twitwrapAPI

> A REST API that handles OAuth authentication and request mechanisms for the twitter API to fetch information of a public account and return the requested data


![Build Status](https://img.shields.io/github/workflow/status/bjpadhy/twitscrapeAPI/Node.js%20CI/master)
![Last Commit](https://img.shields.io/github/last-commit/bjpadhy/twitscrapeAPI/master)
![License](https://img.shields.io/npm/l/scrape-twitter)

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
- [Support](#support)
- [License](#license)


## Installation

- Install Node.js from https://nodejs.org/

### Clone

- Fork or Clone this repo to your local machine using `git clone https://github.com/bjpadhy/twitscrapeAPI.git`

### Setup

- Change to the directory using the terminal

> Install and update the packages first

```shell
$ npm install
$ npm update
```
---

## Features

- Get Twitter data without being required to configure an API key or authentication headers.
- Deploy and use as with any REST client to consume in frontend projects.
- Get timelines, search results and public lists.


## Usage

> Start the server
```shell
$ npm run start
```

> Get Timeline
>> Optional query parameter: count – Number to limit results(default: 50)
```shell
http://localhost:8080/api/timeline/<username>
http://localhost:8080/api/timeline/<username>/?count=<number>
```

> Get List
>> Optional query parameters: retweets - true/false(default: true), entities – Tweet metadata - true/false(default: true), count(default: 50)
```shell
http://localhost:8080/api/list/<username>/<listname>
http://localhost:8080/api/list/<username>/<listname>/?retweets=false&entities=false&count=<number>
```

> Get Search Result
>> Optional query parameters: type – top/latest(default: latest), count(default: 50)
```shell
http://localhost:8080/api/search/<search_term>
http://localhost:8080/api/search/<search_term>/?type=top&count=<number>
```


## Support

Reach out to me here!

- Twitter at <a href="https://twitter.com/bjpadhy" target="_blank">`@bjpadhy`</a>

---


## License

![License](https://img.shields.io/npm/l/scrape-twitter)

- **[GPL-v3 License](https:/opensource.org/licenses/GPL-3.0)**
