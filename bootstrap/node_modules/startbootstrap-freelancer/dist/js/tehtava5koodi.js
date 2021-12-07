const mysql = require("mysql");
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const con = mysql.createConnection({
    host: "localhost",
    user: "tapio",
    password: "kt123456",
    database:"puhelinluettelo",
    multipleStatements: true 
});
con.connect((err) => {
if (err) {
    console.log("Error connecting to Db");
return;
}
    console.log("Connection established");
});

// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*");
  
    // Request methods you wish to allow
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
  
    // Request headers you wish to allow
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
  // {"henkilo_id":"1"}
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);
  
    // Pass to next layer of middleware
    next();
  });
//Metodit mitä kokeiltiin app metodi kohtiin
// app.put post get delete
app.post('/henkilo', function(req,res){
    let henkilo = req.body;
    console.log(henkilo);
    if(!henkilo){
        return res.status(400).send({error:true, message: 'Ole hyvä ja syötä henkilo. O<--<'});
    }
    con.query('INSERT INTO henkilot SET ?', henkilo, (err, res) => {
        if(err) throw err;
        //console.log('Last insert ID:', res.insertId);
        });
        res.send({error:false, data:henkilo, message:"henkilön tiedot lisätty"});
   
});

//kokeillaan puttia... putti ok
app.put('/henkilo', function(req,res){
    let tiedot = req.body;
    let id = req.body.id;
    console.log(id);
    let puhelin = req.body.puhelin;
    console.log(puhelin);

    console.log(tiedot);
    if(!tiedot){
        return res.status(400).send({error:true, message: "Tarkista tietojen syöttö"})
    }
    con.query(
        'UPDATE henkilot SET puhelin = ? Where ID = ?',
        [puhelin, id],
        (err, result) => {
        if (err) throw err;
        res.send({error:false, data: result, message:"Ei ongelmia, mikäli tiedot tietokannassa, puhelinnumero päivitetty..."})
        console.log(`Changed ${result.changedRows} row(s)`);
        }
        );

})

//get toimii...
app.get('/henkilo', function(req,res, next){
      con.query("SELECT * FROM henkilot", (err, rows) => {
        if (err) throw err;
        console.log("Data received from Db:");
        res.send({error: false, data: rows, message: 'tiedot'});
        });
    
})

//delete toimii
app.delete('/henkilo', function(req, res){
    let henkilo_id = req.body.id;
    if(!henkilo_id){
        return res.status(400).send({error:true, message: 'Please provide id'});
    }
    con.query(
        'DELETE FROM henkilot WHERE id = ?', henkilo_id, (err, result) => {
        if (err) throw err;
        console.log(`Deleted ${result.affectedRows} row(s)`);
        res.send({error:false, data: result, message: "Tieto poistettu"});
        }
    );
})


app.listen(3002,()=>{
    console.log("kuunnellaan porttia 3002");
})
/**
 * con.end((err) => {
});
 * 
 */
