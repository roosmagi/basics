const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var Nimi = null;
var LubatudKiirus = null;
var TegelikKiirus = null;

const Arvuta = () => {
    const calcualted = (TegelikKiirus - LubatudKiirus)*3
    if (calcualted >= 190){
        return 190
    } else {
        return calcualted;
    }
}

const KoguInfo = () =>{
    rl.question(`Nimi: `, nimi => {
        Nimi = nimi
        rl.question(`Lubatud Kiirus: `, lubatudk => {
            LubatudKiirus = lubatudk
            rl.question(`Tegelik Kiirus: `, tegelikk => {
                TegelikKiirus = tegelikk
                console.log(`${Nimi}, kiiruse ületamise eest on teie trahv ${Arvuta()} eurot.`)
                rl.close()
            });
        });
    });
} 

KoguInfo()