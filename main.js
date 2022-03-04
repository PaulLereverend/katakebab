var tauxReduc = require('./reduc.json');
var tva = require('./tva.json');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

var keep = true;
console.log('Taux de réduction');
tauxReduc.forEach(tr => {
    console.log("Taux : " + tr.taux + "€ => " + tr.reduc + "%");
});
console.log('Code TVA');
tva.forEach(tva => {
    console.log("Code : " + tva.code + " => " + tva.val + "%");
});
do {
    var prix = readlineSync.question(`Quel est le prix unitaire du produit ? `);
    //if (!inputError(prix, "number")) {
    var quantite = readlineSync.question(`Quelle quantitié ? `);
    //if (!inputError(quantite, "number")) {
    console.log("Le prix total est de : " + prix * quantite + "€");
    //}
    //}

    var continuer = readlineSync.question('Voulez vous ajouter un autre produit ? (oui/non)');
    if (continuer != "oui") {
        keep = false;
    }
} while (keep);
console.log()



function inputError(element, typeWanted) {
    console.log(typeof element);
    if (typeof element != typeWanted) {
        console.error("Erreur de saisie veuillez réessayer");
        readline.close();
        return true;
    }
    return false;
}