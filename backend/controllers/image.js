const Clarifai = require('clarifai');
require('dotenv').config();

//You must add your own API key here from Clarifai. 
// const app = new Clarifai.App({
//  apiKey: process.env.CLARIFY_API_KEY 
// });

const handleApiCall = (req, res) => {
  const PAT = process.env.CLARIFY_API_KEY;
  const USER_ID = process.env.CLARIFY_USER_ID;
  const APP_ID = 'smart-brain-app';
  const MODEL_ID = 'face-detection';
  const IMAGE_URL = req.body.input;

  const raw = JSON.stringify({
      "user_app_id": {
          "user_id": USER_ID,
          "app_id": APP_ID
      },
      "inputs": [
          {
              "data": {
                  "image": {
                      "url": IMAGE_URL
                  }
              }
          }
      ]
  });

  const requestOptions = {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Authorization': 'Key ' + PAT
      },
      body: raw
  };

  fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs", requestOptions)
      .then(response => response.json())
      .then(data=> res.json(data))
      .catch(err => res.status(400).json('Unable to work with API'));        
}

const handleImage = (req, res, db) => {
  const { id } = req.body;
  db('users').where('id', '=', id)
  .increment('entries', 1)
  .returning('entries')
  .then(entries => {
    // If you are using knex.js version 1.0.0 or higher this now returns an array of objects. Therefore, the code goes from:
    // entries[0] --> this used to return the entries
    // TO
    // entries[0].entries --> this now returns the entries
    res.json(entries[0].entries);
  })
  .catch(err => res.status(400).json('unable to get entries'))
}

module.exports = {
  handleImage,
  handleApiCall
}