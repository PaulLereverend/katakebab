var tauxReduc = require('./reduc.json');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

tauxReduc.forEach(tr => {
    console.log("Taux : " + tr.taux + "€ => " + tr.reduc + "%");
});

readline.question(`Quel est le prix unitaire du produit ? `, prix => {
    //if (!inputError(prix, "number")) {
    readline.question(`Quelle quantitié ? `, quantite => {
        //if (!inputError(quantite, "number")) {
        console.log("Le prix total est de : " + prix * quantite + "€");
        readline.close();
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