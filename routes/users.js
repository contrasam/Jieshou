var express = require('express');
var router = express.Router();
var db = require('orchestrate')("d8f53af2-1f9b-4144-8c7a-2bac7bff4418");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  // req.username, req.password
  
});

router.post('/create', function(req, res, next) {

  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var username = req.body.username;
  var password = req.body.password;
  var phoneNumber = req.body.phoneNumber;
  var lat = req.body.lat;
  var lang = req.body.lang;
  var addressLine = req.body.addressLine;
  var postalCode = req.body.postalCode;
  var city = req.body.city;
  var province = req.body.province;
  
  db.post('users', {
	  "firstName": firstName,
	  "lastName": lastName,
	  "username": username,
	  "password": password,
	  "phoneNumber": phoneNumber,
	  "lat": lat,
	  "lang": lang,
	  "addressline": addressLine,
	  "postalCode": postalCode,
	  "city": city,
	  "province": province
  })
  .then(function (result) {
  	  res.json({
  	  	status:200,
  	  	message:"User created successfully."
  	  });
   })
  .fail(function (err) {
  	  res.json({
  	  	status:500,
  	  	message:"Unexpected error creating user, try again."
  	  });
   });

});

module.exports = router;