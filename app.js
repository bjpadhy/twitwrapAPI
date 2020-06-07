const express = require('express');
const cors = require('cors');
const app = express();
const compression = require('compression');
const helmet = require('helmet');
//Start the server
app.listen(process.env.PORT || 8080, () => {
  console.log("Listening...");
});

//Middlewares
app.use(compression());
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Import Routes
const listRoute = require('./routes/list');
const queryRoute = require('./routes/query');
const timelineRoute = require('./routes/timeline');
app.use('/api/by-list/', listRoute);
app.use('/api/by-query/', queryRoute);
app.use('/api/timeline/', timelineRoute);