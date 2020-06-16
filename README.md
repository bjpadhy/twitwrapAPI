# twitscrapeAPI

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
- Get timelines, query results and public lists.


## Usage

> Start the server
```shell
$ npm run start
```

> Get Timeline
```shell
http://localhost:3000/api/timeline/<username>/<limitresults>(optional)
```
> Get list
```shell
http://localhost:3000/api/by-list/<username>/<listname>/<limitresults>(optional)
```
> Get query result
- type: top or latest
```shell
http://localhost:3000/api/by-query/<query>/<type>/<limitresults>(optional)
```


## Support

Reach out to me at one of the following places!

- Twitter at <a href="https://twitter.com/bjpadhy" target="_blank">`@bjpadhy`</a>

---


## License

![License](https://img.shields.io/npm/l/scrape-twitter)

- **[GPL-v3 License](https:/opensource.org/licenses/GPL-3.0)**
