'use strict';

const response = require('../response');
const db = require('../settings/db');

exports.user = (req, res) => {
  const email = req.query.email;
  const sql = "SELECT * FROM `users` WHERE email ='" + email + "'";
  db.query(sql, (err, results) => {
    if (err) console.log(err);
    else response.status(results, res);
  });
};

exports.registration = (req, res) => {
  const sql =
    "INSERT INTO `users`(`name`, `email`, `password`, `phone`, `address`) VALUES('" +
    req.query.name +
    "', '" +
    req.query.email +
    "', '" +
    req.query.password +
    "', '" +
    req.query.phone +
    "', '" +
    req.query.address +
    "')";
  db.query(sql, (err, results) => {
    if (err) console.log(err);
    else response.status(results, res);
  });
};
