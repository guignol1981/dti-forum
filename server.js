if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require('path');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');
const userApi = require('./server/api/user-api');
const publicationApi = require('./server/api/publication-api');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const MongoStore = require('connect-mongo')(expressSession);
const sessionMiddleWare = expressSession({
    secret: 'test',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
});

require('./server/passport/serializer');
require('./server/passport/local-strategy');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(sessionMiddleWare);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api/users', userApi);
app.use('/api/publications', publicationApi);

app.get('*', (_, res) => res.sendFile(path.join(__dirname, 'dist/index.html')));

server.listen(process.env.PORT, () =>
    console.log(
        `Dti-Overflow is running and listening on port ${process.env.PORT}`
    )
);
