const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});   

let x = 0
õunu = 14

rl.question("Mitu pöialpoissi tahab õunu?", arv =>{
    for (let i = 0; i < arv; i++){
        const sarv = Math.floor(Math.random() * 2) + 1;
        console.log(sarv)
        x += sarv
    } 
    console.log("Lumivalgekesele jäi " + (õunu-x) + " õuna.")
 
rl.close
})