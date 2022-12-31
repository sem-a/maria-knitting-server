'use strict';

const e = require('cors');
const response = require('../response');
const db = require('../settings/db');

exports.newproducts = (req, res) => {
  const sql = "SELECT * FROM `products` ORDER BY date_add DESC";
  db.query(sql, (err, results) => {
    if (err) console.log(err);
    else response.status(results, res);
  });
};

exports.popularproducts = (req, res) => {
  const sql = "SELECT * FROM `products` ORDER BY views DESC";
  db.query(sql, (err, results) => {
    if (err) console.log(err);
    else response.status(results, res); 
  })
}

exports.categories = (req, res) => {
  const sql = "SELECT * FROM `categories`";
  db.query(sql, (err, results) => {
    if (err) console.log(err);
    else response.status(results, res);
  });
};

exports.changeCategory = (req, res) => {
  const category_id = req.query.id
  const sql = "SELECT * FROM `products` WHERE category_id ='" + category_id + "'";
  db.query(sql, (err, results) => {
    if (err) console.log(err);
    else response.status(results, res);
  });
}