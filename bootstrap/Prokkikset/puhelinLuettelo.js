const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout})
let puhelinLuettelo = [{
    nimi: "Jorma",
    numero: "04012030",
},
    {
        nimi: "Tapio",
        numero: "04050291",
    },
    {
        nimi: "Aino",
        numero: "04029328"
    }];
var lisaysNumero;
var nimi;
rl.question("Haluatko lisätä tietoja vai hakea tietoja? h/l ", vastaus=> {
  if(vastaus==='h'){
      rl.question("Syötä haettavan nimi ", haku=>{
          nimi = haku;
          var palautus = search(nimi, puhelinLuettelo);
          console.log(palautus)
          rl.close();
      })
  }else if(vastaus==='l'){
      rl.question("Syötä lisättävän nimi: ", lisays1=> {
          nimi = lisays1;

          rl.question('Syötä lisättävän numero: ', lisays2 => {
              lisaysNumero = lisays2;
              rl.close();
              puhelinLuettelo.push(nimi, lisaysNumero);
              console.log("Lisäys tehtiin")
          })

      })

  }else(console.log("Tarkista syöte"))
})

function search(syoteNimi, array){
    for (var i=0; i<array.length; i++){
        if(array[i].nimi===syoteNimi){
            return syoteNimi + "n numero on: " + (array[i].numero);
        }
    }

}




