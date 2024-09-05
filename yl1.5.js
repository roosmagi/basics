const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var ainepunktid = null;
var nädalad = null;

const ArvutaAjakulu = (ap, nadal) =>{
    return Math.round((ap* 26) / nadal)
}

rl.question(`Ainepunktid: `, nimi => {
    ainepunktid = nimi

    rl.question(`nädalad: `, lubatudk =>{
       nädalad = lubatudk

       console.log(ArvutaAjakulu(ainepunktid, nädalad))

       rl.close()
    })
})