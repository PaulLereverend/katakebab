var tauxReduc = require('./reduc.json');
tauxReduc.forEach(tr => {
    console.log("Taux : " + tr.taux + "€ => " + tr.reduc + "%");
});