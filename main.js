var tauxReduc = require('./reduc.json');
var tva = require('./tva.json');
var readlineSync = require('readline-sync');

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
var produits = [];
do {
    var prix = readlineSync.question(`Quel est le prix unitaire du produit ? `);
    //if (!inputError(prix, "number")) {
    var quantite = readlineSync.question(`Quelle quantitié ? `);
    //if (!inputError(quantite, "number")) {
    var prixTotalHT = prix * quantite
    console.log("Prix total HT : " + prixTotalHT + "€");

    var tva = readlineSync.question(`Quel pourcentage de TVA souhaitez-vous appliquer ? (en %) `);
    var prixTotalTTC = prixTotalHT * (tva / 100 + 1)
    console.log('Prix total TTC : ' + prixTotalTTC + " €");

    produits.push({ prixHT: prixTotalHT, prixTTC: prixTotalTTC });
    var continuer = readlineSync.question('Voulez vous ajouter un autre produit ? (oui/non)');
    if (continuer != "oui") {
        keep = false;
    }

} while (keep);

var sommeTTC = produits.map(produit => produit.prixTTC).reduce((prev, next) => prev + next);
console.log("Prix total TTC :" + sommeTTC);

console.log('Taux de réduction : 0%');
var reduction = 10;
if (reduction > 0) {
    var prixTotalTTCWithReduc = sommeTTC - sommeTTC * (reduction / 100)
}
console.log('Prix total TTC après réduction : ' + prixTotalTTCWithReduc + " €");



function inputError(element, typeWanted) {
    console.log(typeof element);
    if (typeof element != typeWanted) {
        console.error("Erreur de saisie veuillez réessayer");
        readline.close();
        return true;
    }
    return false;
}