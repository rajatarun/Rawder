var mysql = require("mysql");
var nodemailer = require('nodemailer');
var con = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "root",
 name: "rawder",
 port:"3306"
});

con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
	console.log(err);
    return;
  }
  console.log('Connection established');
});
var transporter = nodemailer.createTransport('smtps://rajatarun12@gmail.com:Rajatarun1@smtp.gmail.com');
module.exports = function(app){
	app.get("/api/contactAdmin",function(req,res){
		 
		 var query = "select name,phone,email,message from contacts";
		 con.query('use rawder');
		 con.query(query,function(err,resp){
		 	if(err){
		 		res.json(err)
		 	}
		 	console.log(resp);
		 	res.json(resp);	
		 })
		 
	})
	app.post("/api/contact",function(req,res){
		console.log(req.body);
		
		query="select email from contacts where email='"+req.body.email+"'";
		var mailOptions = {
		    from: 'rajatarun12@gmail.com', // sender address
		    to: req.body.email, // list of receivers
		    subject: 'Hello ✔', // Subject line
		    text: 'Hello world 🐴', // plaintext body
		    html: '<b>Hello world 🐴</b>' // html body
		};

		con.query('use rawder');
		con.query(query,function(err,resp){
			if(err)
				console.log(err);
			console.log(resp);
			try{
			if(resp[0].email == req.body.email){

				console.log("user exists");
			}
			}
			catch(e){
				if(e instanceof TypeError){
				con.query('use rawder');
				console.log(req.body);
				var user = {name: req.body.name,phone: req.body.phone, email: req.body.email, message:req.body.message};
				con.query('INSERT INTO contacts SET ?', user, function(err,response){
  				if(err) throw err;
 			 	
				});
				transporter.sendMail(mailOptions, function(error, info){
				    if(error){
				        return console.log(error);
				    }
				    console.log('Message sent: ' + info.response);
				});

			}
			}

		});
	})
	

}
