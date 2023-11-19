const express = require('express');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const app = express();
const DB = require('./database.js');

const authCookieName = 'token';

// The service port. In production the application is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

//
app.use(cookieParser());

// Serve up the applications static content
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

//Create user
apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

//Login
apiRouter.post('/auth/login',async (req,res) => {
  const user = await DB.getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: "Username or Password is incorect"})
})

//Logging out
apiRouter.delete('/auth/logout', (_req,res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

//Authorizing user?
apiRouter.get('/user/:username', async (req,res) => {
  const user = await DB.getUser(req.params.username);
  if(user) {
    const token = req?.cookies.token;
    res.send({ username: user.username, authenticated: token === user.token});
    return;
  }
  res.status(404).send({ msg: "Not Found"})
});

// secureApiRouter verifies credentials for endpoints
var secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

// GetScores
apiRouter.get('/score', async (_req, res) => {
  const score = await DB.getScore();
  res.send(score);
});

// SubmitScore
apiRouter.post('/score', async (req, res) => {
  DB.addScore(req.body);
  const score = await DB.getScore();
  res.send(score);
});

// Make avatar
const makeAvatar = require('cartoon-avatar');
const url = makeAvatar.generate_avatar({ "gender": "female" });

// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});