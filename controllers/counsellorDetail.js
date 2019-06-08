const assert = require('assert');
var mongo = require('mongodb');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const crypto = require('crypto');


exports.getCounsellorDataForDate = function(req, res, next) {
  try {
  
    let db = req.app.locals.db;
    db.collection("devotees").find({
        counsellor: findCounsellor(req.query.username),
        "calling.date": req.query.date,  
        "attendance.date": req.query.date,  
      })
    .toArray(function(err, cdata){
      console.log('c data is ', cdata)
      res.status(200).json({
        result:"ok",
        resources: cdata,
       })
     });

  } catch(err) {
      console.log("Exception :", err);

  }

}

function findCounsellor(username) {
      console.log('username found', username);
      cslr = '';
      switch(username) {
        case 'sgp':
          cslr = 'HG Shyam Gopal Prabhuji';
          break;
        case 'kvp':
          cslr = 'HG Kalpvraksha Prabhuji';
          break;
        case 'vcp':
          cslr = 'HG Vedanta Chaitanya Prabhuji';
          break;
        case 'pvnp':
          cslr = 'HG Pundarika Vidyanidhi Prabhuji';
          break;
        case 'jnp':
          cslr = 'HG Jagadanand Pandit Prabhuji';
          break;
      }
      return cslr;
  }
