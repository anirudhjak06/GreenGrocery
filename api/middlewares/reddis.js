const express = require('express');
const fetch = require('node-fetch');
const redis = require('redis');

const REDIS_PORT = process.env.PORT || 6379;

const client = redis.createClient(REDIS_PORT);

const app = express();

// Set response
function setResponse(username, passw) {
  console.log("Logged in successfully");
}

// Make request to Github for data
async function getpassw(req, res, next) {
  try {
    const { username } = req.params;

    const response = await fetch(`https://greengrocery30.herokuapp.com/api/users/${username}`);

    const data = await response.json();

    const passw = data.password;

    // Set data to Redis
    client.setex(username, 3600, passw);

    res.send(setResponse(username, passw));
  } catch (err) {
    console.error(err);
    res.status(500);
  }
}

// Cache middleware
function cache(req, res, next) {
  const { username } = req.params;

  client.get(username, (err, data) => {
    if (err) throw err;

    if (data !== null) {
      res.send(setResponse(username, data));
    } else {
      next();
    }
  });
}

app.get('/passw/:username', cache, getpassw);
