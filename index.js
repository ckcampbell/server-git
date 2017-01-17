var express = require('./node_modules/express');
var app = express();
var file7 = './saved_values/default7.json';
var file19 = './saved_values/default19.json';
var bodyParser = require('./node_modules/body-parser');
var exec = require('child_process').exec;
var fs = require('fs');

fs.readdir('assets/bootstrap/css/', (err, files) => {
  files.forEach(file => {
	app.get("/assets/bootstrap/css/" + file, function (req, res) {
		res.sendFile( __dirname + "/assets/bootstrap/css/" + file );
	})
    console.log(file);
  });
})

fs.readdir('assets/bootstrap/js/', (err, files) => {
  files.forEach(file => {
	app.get("/assets/bootstrap/js/" + file, function (req, res) {
		res.sendFile( __dirname + "/assets/bootstrap/js/" + file );
	})
    console.log(file);
  });
})

fs.readdir('assets/bootstrap/fonts/', (err, files) => {
  files.forEach(file => {
	app.get("/assets/bootstrap/fonts/" + file, function (req, res) {
		res.sendFile( __dirname + "/assets/bootstrap/fonts/" + file );
	})
    console.log(file);
  });
})

// set ejs as rendering engine
app.set('view engine', 'html');

// parse html forms
app.use(bodyParser.urlencoded({ extended : false }));

// render the html page
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/form.html" );
})

// load JS files
app.get('/assets/jquery.js', function (req, res) {
   res.sendFile( __dirname + "/assets/jquery.js" );
})

// load default value set JSON files
app.get('/saved_values/default7.json', function (req, res) {
   res.sendFile( __dirname + "/saved_values/default7.json" );
})

app.get('/saved_values/default19.json', function (req, res) {
   res.sendFile( __dirname + "/saved_values/default19.json" );
})


// when Run button is clicked
app.post('/run7', function (req, res) {
  var inputs = req.body.pert + " " + req.body.leap + " " + req.body.round_trip + " ";
  for(var i in req.body.offset7){
	inputs += req.body.offset7[i] + " ";  
  }
  console.log(inputs);
	/* exec("/media/mmcblk0p1/bin/run_spgd_7.sh" + " " + inputs, function(err, stdout){
		if(err){
			throw err;
		}
	}); */
  res.redirect('/');
});

app.post('/run19', function (req, res) {	
  var inputs = req.body.pert + " " + req.body.leap + " " + req.body.round_trip + " ";
  for(var i in req.body.offset19){
	inputs += req.body.offset19[i] + " ";  
  }
  console.log(inputs);
	/* exec("/media/mmcblk0p1/bin/run_spgd_19.sh" + " " + inputs, function(err, stdout){
		if(err){
			throw err;
		}
	}); */
  res.redirect('/');
});

// when Update button is clicked
app.post('/update7', function (req, res) {
  var inputs = req.body.pert + " " + req.body.leap + " " + req.body.round_trip + " ";
  for(var i in req.body.offset7){
	inputs += req.body.offset7[i] + " ";  
  }
  console.log(inputs);
	/* exec("/media/mmcblk0p1/bin/update.sh" + " " + inputs, function(err, stdout){
		if(err){
			throw err;
		}
	}) */;
  res.redirect('/');
});
	
app.post('/update19', function (req, res) {	
  var inputs = req.body.pert + " " + req.body.leap + " " + req.body.round_trip + " ";
  for(var i in req.body.offset19){
	inputs += req.body.offset19[i] + " ";  
  }
  console.log(inputs);
	/* exec("/media/mmcblk0p1/bin/update.sh" + " " + inputs, function(err, stdout){
		if(err){
			throw err;
		}
	}); */
  res.redirect('/');
});

// when Reset button is clicked
app.post('/reset7', function (req, res) {
  console.log("Resetting...");
  /* exec("/media/mmcblk0p1/bin/reset.sh", function(err, stdout){
		if(err){
			throw err;
		}
	}); */
});

app.post('/reset19', function (req, res) {
  console.log("Resetting...");
  /* exec("/media/mmcblk0p1/bin/reset.sh", function(err, stdout){
		if(err){
			throw err;
		}
	}); */
});

app.post('/save', function (req, res) {
  //Storing data:
  var inputs = req.body.pert + " " + req.body.leap + " " + req.body.round_trip + " " + req.body.offset1 + " " + req.body.offset2 + " " + req.body.offset3 + " " + req.body.offset4 + " " + req.body.offset5 + " " + req.body.offset6 + " " + req.body.offset7;
  var obj = {'pert': req.body.pert, 'leap': req.body.leap, 'round_trip': req.body.round_trip, 'offset1': req.body.offset1, 'offset2': req.body.offset2, 'offset3': req.body.offset3, 'offset4': req.body.offset4, 'offset5': req.body.offset5, 'offset6': req.body.offset6, 'offset7': req.body.offset7};
  var json = JSON.stringify(obj);
  fs.writeFile('./saved_values/default7.json', json, 'utf8', (err) => {
    if (err) throw err;
	console.log('Inputs saved!');
  });
  res.redirect('/');
});

app.post('/save19', function (req, res) {
  //Storing data:
  var inputs = req.body.pert + " " + req.body.leap + " " + req.body.round_trip + " " + req.body.offset1 + " " + req.body.offset2 + " " + req.body.offset3 + " " + req.body.offset4 + " " + req.body.offset5 + " " + req.body.offset6 + " " + req.body.offset7;
  var obj = {'pert': req.body.pert, 'leap': req.body.leap, 'round_trip': req.body.round_trip, 'offset1': req.body.offset1, 'offset2': req.body.offset2, 'offset3': req.body.offset3, 'offset4': req.body.offset4, 'offset5': req.body.offset5, 'offset6': req.body.offset6, 'offset7': req.body.offset7, 'offset8': req.body.offset8, 'offset9': req.body.offset9, 'offset10': req.body.offset10, 'offset11': req.body.offset11, 'offset12': req.body.offset12, 'offset13': req.body.offset13, 'offset14': req.body.offset14, 'offset15': req.body.offset15, 'offset16': req.body.offset16, 'offset17': req.body.offset17, 'offset18': req.body.offset18, 'offset19': req.body.offset19};
  var json = JSON.stringify(obj);
  fs.writeFile('./saved_values/default19.json', json, 'utf8', (err) => {
    if (err) throw err;
    console.log('Inputs saved!');
  });
  res.redirect('/');
});

app.post('/load', function (req, res) {
  if(req.body.channel == 7){
    //Storing data:
	var inputs = req.body.pert + " " + req.body.leap + " " + req.body.round_trip + " " + req.body.offset1 + " " + req.body.offset2 + " " + req.body.offset3 + " " + req.body.offset4 + " " + req.body.offset5 + " " + req.body.offset6 + " " + req.body.offset7;
	var obj = {'pert': req.body.pert, 'leap': req.body.leap, 'round_trip': req.body.round_trip, 'offset1': req.body.offset1, 'offset2': req.body.offset2, 'offset3': req.body.offset3, 'offset4': req.body.offset4, 'offset5': req.body.offset5, 'offset6': req.body.offset6, 'offset7': req.body.offset7};
	var json = JSON.stringify(obj);
	fs.writeFile('./saved_values/default7.json', json, 'utf8', (err) => {
	  if (err) throw err;
	  console.log('Inputs saved!');
	});
  }
  else if(req.body.channel == 19){
	var inputs = req.body.pert + " " + req.body.leap + " " + req.body.round_trip + " " + req.body.offset1 + " " + req.body.offset2 + " " + req.body.offset3 + " " + req.body.offset4 + " " + req.body.offset5 + " " + req.body.offset6 + " " + req.body.offset7;
	var obj = {'pert': req.body.pert, 'leap': req.body.leap, 'round_trip': req.body.round_trip, 'offset1': req.body.offset1, 'offset2': req.body.offset2, 'offset3': req.body.offset3, 'offset4': req.body.offset4, 'offset5': req.body.offset5, 'offset6': req.body.offset6, 'offset7': req.body.offset7, 'offset8': req.body.offset8, 'offset9': req.body.offset9, 'offset10': req.body.offset10, 'offset11': req.body.offset11, 'offset12': req.body.offset12, 'offset13': req.body.offset13, 'offset14': req.body.offset14, 'offset15': req.body.offset15, 'offset16': req.body.offset16, 'offset17': req.body.offset17, 'offset18': req.body.offset18, 'offset19': req.body.offset19};
	var json = JSON.stringify(obj);
	fs.writeFile('./saved_values/default19.json', json, 'utf8', (err) => {
	  if (err) throw err;
	  console.log('Inputs saved!');
	});
  }
  res.redirect('/');
});
  
app.listen(8000);
console.log('App is listening on PORT 8000');