const express = require('express');
const bodyParser = require('body-parser'); // latest version of exressJS now comes with Body-Parser!
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex'); //knex init is used here to set up database (db).
const Auth = require('./controllers/authorization');
require('dotenv').config();

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');
const logout = require('./controllers/logout');
const db = require('./data/db-config'); //knex init is used here to set up database (db).

const app = express();

app.use(cors())
app.use(express.json()); // latest version of exressJS now comes with Body-Parser!

app.get('/logout', (req, res)=>{ logout.logoutController(req, res) });
app.post('/signin', signin.signinAuthentication(db, bcrypt));
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) });
app.get('/profile/:id', Auth.requireAuth, (req, res) => { profile.handleProfileGet(req, res, db)});
app.post('/profile/:id', Auth.requireAuth, (req, res)=> {profile.handleProfilePost(res, req, db)});
app.put('/image', Auth.requireAuth, (req, res) => { image.handleImage(req, res, db)});
app.post('/imageurl', Auth.requireAuth, (req, res) => { image.handleApiCall(req, res)});

const port = 3000;
app.listen(port, ()=> {
  console.log('app is running on port '+ port);
});
