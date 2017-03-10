var router = require('express').Router();
var pg = require('pg');
var config = {
  database: 'phi',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};

var pool = new pg.Pool(config);

//warehouse view should include warehouse, fulfillment_days
router.get('/warehouse', function(req, res){
  pool.connect(function(errorConnectingToDatabase, client, done){
    if(errorConnectingToDatabase) {
      console.log('Error connecting to database: ', errorConnectingToDatabase);
      res.sendStatus(500);
    } else {
      client.query('SELECT warehouse, fulfillment_days FROM warehouse;', function(errorMakingQuery, result){
        done();
        if(errorMakingQuery) {
          console.log('Error making the database query: ', errorMakingQuery);
          res.sendStatus(500);
        } else {
          res.status(200).sent(result.rows);
        }
      });//end of function(errorMakingQuery, result)
    }
  });//end of pool.connect
});//end og router.get

//customer view should include first_name, last_name
router.get('/customer', function(req, res){
  pool.connect(function(errorConnectingToDatabase, client, done){
    if(errorConnectingToDatabase) {
      console.log('Error connecting to database: ', errorConnectingToDatabase);
      res.sendStatus(500);
    } else {
      client.query('SELECT first_name, last_name FROM customers;', function(errorMakingQuery, result){
        done();
        if(errorMakingQuery) {
          console.log('Error making the database query: ', errorMakingQuery);
          res.sendStatus(500);
        } else {
          res.status(200).sent(result.rows);
        }
      });//end of function(errorMakingQuery, result)
    }
  });//end of pool.connect
});//end og router.get

//The orders view should have a table that includes this information which will require a few JOINs:
//should include order_date, description, street, city, state, zip, address_name, first_name, last_name
router.get('/order', function(req, res){
  pool.connect(function(errorConnectingToDatabase, client, done){
    if(errorConnectingToDatabase) {
      console.log('Error connecting to database: ', errorConnectingToDatabase);
      res.sendStatus(500);
    } else {
      client.query('SELECT order_date, description, street, city, state, zip, address_type, first_name, last_name FROM orders JOIN addresses ON orders.address_id=addresses.id JOIN line_items ON line_items.order_id=orders.id JOIN products ON products.id=line_items.product_id JOIN customers ON addresses.customer_id = customers.id;', function(errorMakingQuery, result){
        done();
        if(errorMakingQuery) {
          console.log('Error making the database query: ', errorMakingQuery);
          res.sendStatus(500);
        } else {
          res.status(200).sent(result.rows);
        }
      });//end of function(errorMakingQuery, result)
    }
  });//end of pool.connect
});//end og router.get


module.exports = router;
