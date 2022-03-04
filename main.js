var tauxReduc = require('./reduc.json');
var tva = require('./tva.json');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('Taux de réduction');
tauxReduc.forEach(tr => {
    console.log("Taux : " + tr.taux + "€ => " + tr.reduc + "%");
});
console.log('Code TVA');
tva.forEach(tva => {
    console.log("Code : " + tva.code + " => " + tva.val + "%");
});

readline.question(`Quel est le prix unitaire du produit ? `, prix => {
    //if (!inputError(prix, "number")) {
    readline.question(`Quelle quantitié ? `, quantite => {
        //if (!inputError(quantite, "number")) {
        var prixTotalHT = prix * quantite
        console.log("Prix total HT : " + prixTotalHT + "€");

        readline.question(`Quel pourcentage de TVA souhaitez-vous appliquer ? (en %) `, tva => {
            var prixTotalTTC = prixTotalHT * (tva / 100 + 1)
            console.log('Prix total TTC : ' + prixTotalTTC + " €");

            readline.close();
        });
        //}
    });
    //}

});



function inputError(element, typeWanted) {
    console.log(typeof element);
    if (typeof element != typeWanted) {
        console.error("Erreur de saisie veuillez réessayer");
        readline.close();
        return true;
    }
    return false;
}