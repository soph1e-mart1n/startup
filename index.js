const express = require('express');
const app = express();

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// GetScores
apiRouter.get('/score', (_req, res) => {
  res.send(score);
});

// SubmitScore
apiRouter.post('/score', (req, res) => {
  score = updateScores(req.body, score);
  res.send(score);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// updateScores considers a new score for inclusion in the high scores.
// The high scores are saved in memory and disappear whenever the service is restarted.
let score = 0;
function updateScores(newScore, score) {
  score += newScore;
  return score;
}


/*const express = require('express');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());
app.use(express.static('public'));

const apiRouter = express.Router();
app.use('/api', apiRouter);

let scores = [];

apiRouter.get('/scores', (_req, res) => {
  res.send(scores);
});

apiRouter.post('/score', (req, res) => {
  scores = updateScores(req.body, scores);
  updateTotalCoins(req.body.stars);
  res.send(scores);
});

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

function updateScores(newScore, scores) {
  let found = false;
  for (const [i, prevScore] of scores.entries()) {
    if (newScore.score > prevScore.score) {
      scores.splice(i, 0, newScore);
      found = true;
      break;
    }
  }

  if (!found) {
    scores.push(newScore);
  }

  if (scores.length > 10) {
    scores.length = 10;
  }

  return scores;
}*/

/*// Update or initialize total coins in memory
let totalCoins = 0;

function updateTotalCoins(stars) {
  totalCoins += stars * 2;
}

// API endpoint to get the total coins
apiRouter.get('/total-coins', (_req, res) => {
  res.json({ totalCoins });
});*/

// Make avatar
const makeAvatar = require('cartoon-avatar');
const url = makeAvatar.generate_avatar({ "gender": "female" });