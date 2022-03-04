console.log("hello world");

var tauxReduc = [
    { taux: 1000, reduc: 3 },
    { taux: 5000, reduc: 5 },
    { taux: 7000, reduc: 7 },
    { taux: 10000, reduc: 10 }
]
tauxReduc.forEach(tr => {
    console.log("Taux : " + tr.taux + "€ => " + tr.reduc + "%");
});