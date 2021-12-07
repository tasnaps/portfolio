const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.static('Sanakirja'))
app.use(express.json());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));
let sanakirja = [];

/*CORS isn’t enabled on the server, this is due to security reasons by default,
so no one else but the webserver itself can make requests to the server.*/
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
      "Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token"
    );
  
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);
  
    res.setHeader("Content-type", "application/json");
  
    // Pass to next layer of middleware
    next();
  });

//sanakirjan lukeminen
app.get('/sanakirja', (req, res) => {
    const aukiKirja = fs.readFileSync('./sanakirja.txt', {encoding: 'utf-8', flag:'r'});
    const splitlines = aukiKirja.split(/\r?\n/);
    console.log(splitlines);
    splitlines.forEach((rivi) => {
        const sana = rivi.split(" "); // sanat taulukkoon
        const lisays = {fin: sana[0], eng:sana[1]};
        sanakirja.push(lisays);
    })
    res.json(sanakirja);
});

//spesifin sanan hakeminen sanakirjasta.
  app.get('/sanakirja/:fin', function(req, res){
    const arvo = req.params.fin;
    console.log(arvo); //auto
    const aukiKirja = fs.readFileSync('./sanakirja.txt', {encoding: 'utf-8', flag:'r'});
    const splitlines = aukiKirja.split(/\r?\n/);
    splitlines.forEach((rivi) => {
        const sana = rivi.split(" "); // sanat taulukkoon
        const lisays = {fin: sana[0], eng:sana[1]};
        sanakirja.push(lisays);
    })
      console.log(sanakirja);//[{fin: 'auto', eng: 'car'}]
      sanakirja.forEach(pari => {
          if(pari.fin.valueOf()===arvo){
              res.send(pari.fin + " " + pari.eng);
          }else{
              res.send("Arvoa ei sanakirjassa")
          }
      })
})


//sanakirjaan kirjoittaminen
app.post("/sanakirja/:sana", (req, res) => {
    console.log(req.params.sana);
    const lisays = req.params.sana;
    fs.writeFileSync('./sanakirja.txt',"\n" + lisays ,{encoding: 'utf-8', flag:'a+'});
    res.send("Sana lisätty" );
})

app.listen(3001, () =>{
    console.log("Kuunnellaan:")
})





