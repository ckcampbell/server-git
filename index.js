var express = require('./node_modules/express');
var app = express();
var file7 = './saved_values/default7.json';
var file19 = './saved_values/default19.json';
var bodyParser = require('./node_modules/body-parser');
var exec = require('child_process').exec;
var fs = require('fs');


// set ejs as rendering engine
app.set('view engine', 'html');

// parse html forms
app.use(bodyParser.urlencoded({ extended : false }));

/* // render the ejs page
app.get('/', function (req, res) {
  res.render('form.ejs');
}); */

// render the html page
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/form.html" );
})

// load JQuery
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
app.post('/run', function (req, res) {
  console.log(req.body.channel + " is running.");
  if(req.body.channel == 7){
	var inputs = req.body.pert + " " + req.body.leap + " " + req.body.round_trip + " " + req.body.offset1 + " " + req.body.offset2 + " " + req.body.offset3 + " " + req.body.offset4 + " " + req.body.offset5 + " " + req.body.offset6 + " " + req.body.offset7;
	console.log(inputs);
	/* exec("/media/mmcblk0p1/bin/run_spgd_7.sh" + " " + inputs, function(err, stdout){
		if(err){
			throw err;
		}
	}); */
  }
  else if(req.body.channel == 19){
	var inputs = req.body.pert + " " + req.body.leap + " " + req.body.round_trip + " " + req.body.offset1 + " " + req.body.offset2 + " " + req.body.offset3 + " " + req.body.offset4 + " " + req.body.offset5 + " " + req.body.offset6 + " " + req.body.offset7 + " " + req.body.offset8 + " " + req.body.offset9 + " " + req.body.offset10 + " " + req.body.offset11 + " " + req.body.offset12 + " " + req.body.offset13 + " " + req.body.offset14 + " " + req.body.offset15 + " " + req.body.offset16 + " " + req.body.offset17 + " " + req.body.offset18 + " " + req.body.offset19;
	console.log(inputs);
	/* exec("/media/mmcblk0p1/bin/run_spgd_19.sh" + " " + inputs, function(err, stdout){
		if(err){
			throw err;
		}
	}); */
  }
  res.redirect('/');
});

// when Update button is clicked
app.post('/update', function (req, res) {
  console.log(req.body.channel + " is being updated.");
  if(req.body.channel == 7){
	var inputs = req.body.pert + " " + req.body.leap + " " + req.body.round_trip + " " + req.body.offset1 + " " + req.body.offset2 + " " + req.body.offset3 + " " + req.body.offset4 + " " + req.body.offset5 + " " + req.body.offset6 + " " + req.body.offset7;
	console.log(inputs);
	/* exec("/media/mmcblk0p1/bin/update.sh" + " " + inputs, function(err, stdout){
		if(err){
			throw err;
		}
	}) */;
  }
  else if(req.body.channel == 19){
	var inputs = req.body.pert + " " + req.body.leap + " " + req.body.round_trip + " " + req.body.offset1 + " " + req.body.offset2 + " " + req.body.offset3 + " " + req.body.offset4 + " " + req.body.offset5 + " " + req.body.offset6 + " " + req.body.offset7 + " " + req.body.offset8 + " " + req.body.offset9 + " " + req.body.offset10 + " " + req.body.offset11 + " " + req.body.offset12 + " " + req.body.offset13 + " " + req.body.offset14 + " " + req.body.offset15 + " " + req.body.offset16 + " " + req.body.offset17 + " " + req.body.offset18 + " " + req.body.offset19;
	console.log(inputs);
	/* exec("/media/mmcblk0p1/bin/update.sh" + " " + inputs, function(err, stdout){
		if(err){
			throw err;
		}
	}); */
  }
  res.redirect('/');
});

app.post('/reset', function (req, res) {
  console.log("Resetting...");
  /* exec("/media/mmcblk0p1/bin/reset.sh", function(err, stdout){
		if(err){
			throw err;
		}
	}); */
});

app.post('/save', function (req, res) {
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