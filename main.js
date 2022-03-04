var tauxReduc = require('./reduc.json');
var codesEtat = require('./tva.json');
var readlineSync = require('readline-sync');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

var keep = true;
console.log('Taux de réduction');
tauxReduc.forEach(tr => {
    console.log("Taux : >" + tr.taux + "€ => " + tr.reduc + "%");
});
console.log('Code TVA');
codesEtat.forEach(tva => {
    console.log("Code état : " + tva.code + " => Taux de TVA : " + tva.val + "%");
});
var produits = [];
do {
    var nomProduit = readlineSync.question(`Quel est l'intitulé du produit ?`);

    var prix = readlineSync.question(`Quel est le prix unitaire du produit ? `, {
        mask: false
    });
    //if (!inputError(prix, "number")) {
    var quantite = readlineSync.question(`Quelle quantitié ? `);
    //if (!inputError(quantite, "number")) {
    var prixTotalHT = prix * quantite
    console.log("Prix HT : " + prixTotalHT + "€");

    var codeEtat = readlineSync.question('Quel est le code de l\'etat ?');
    var tva = codesEtat.find(el => el.code == codeEtat).val;

    var prixTotalTTC = prixTotalHT * (tva / 100 + 1)
    console.log('Prix TTC : ' + prixTotalTTC + " €");

    produits.push({ nomProduit: nomProduit, prixHT: prixTotalHT, prixTTC: prixTotalTTC });
    var continuer = readlineSync.question('Voulez vous ajouter un autre produit ? (oui/non)');
    if (continuer != "oui") {
        keep = false;
    }

} while (keep);

var sommeTTC = produits.map(produit => produit.prixTTC).reduce((prev, next) => prev + next);

console.log('');
produits.forEach(produit => {
    console.log(produit.nomProduit + ": " + produit.prixHT + "€ HT / " + produit.prixTTC + "€ TTC");
});
console.log('');
console.log('---------------');
console.log('');
console.log("Prix total TTC :" + sommeTTC + "€");

tauxReduc.sort((a, b) => a.taux < b.taux ? 1 : -1)
for (let i = 0; i < tauxReduc.length; i++) {
    const tr = tauxReduc[i];
    if (sommeTTC > tr.taux) {
        sommeTTC -= sommeTTC * (tr.reduc / 100);
        console.log('Prix total TTC après réduction : ' + sommeTTC + " €");
        break
    }
}

function inputError(element, typeWanted) {
    console.log(typeof element);
    if (typeof element != typeWanted) {
        console.error("Erreur de saisie veuillez réessayer");
        readline.close();
        return true;
    }
    return false;
}