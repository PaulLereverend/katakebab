var pain = {
    vegetarien: true,
    pescitarien: true
}
var viande = {
    vegetarien: false,
    pescitarien: true
}
var tomate = {
    vegetarien: true,
    pescitarien: true
}
var salade = {
    vegetarien: true,
    pescitarien: true
}
var oignon = {
    oignon: true,
    vegetarien: true,
    pescitarien: true
}
var tofu = {
    vegetarien: true,
    pescitarien: true
}
var poisson = {
    vegetarien: false,
    pescitarien: false
}
var fromage = {
    vegetarien: true,
    pescitarien: true
}
var doubleFromage = {
    doubleFromage: true,
    vegetarien: true,
    pescitarien: true
}

data = [{
    id: 1,
    nom: "kebabouz",
    ingredients: [
        pain, tomate, salade, oignon
    ]
},
{
    id: 2,
    nom: "kebz",
    ingredients: [
        pain, viande, tomate, salade
    ]
},
{
    id: 3,
    nom: "keb",
    ingredients: [
        pain, viande, tomate, salade, oignon, fromage
    ]
},
{
    id: 4,
    nom: "keb royal",
    ingredients: [
        pain, viande, tomate, salade, poisson, doubleFromage
    ]
}]



const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("Sélectionnez votre kebab");
data.forEach(kebab => {
    console.log(kebab.id + ": " + kebab.nom);
})
readline.question(`Identifiant du kebab a sélectionner`, id => {
    kebab = data.filter(element => element.id == id)[0];
    var vege = true;
    var pesci = true;
    var doubleFromage = false;
    kebab.ingredients.forEach(ingredient => {
        if (ingredient.vegetarien == false) {
            vege = false;
        }
        if (ingredient.pescitarien == false) {
            pesci = false;
        }
        if (ingredient.doubleFromage) {
            doubleFromage = true;
        }
        if (ingredient.oignon) {
            oignon = true;
        }

    });
    console.log(vege ? "Le Kebab est végétarien" : "Le kebab n'est pas vegetarien");
    console.log(pesci ? "Le kebab est pescitarien" : "Le kebab n'est pas pescitarien");
    console.log(doubleFromage ? "Le kebab a un double fromage" : "Le kebab n'a pas de double fromage");
    console.log(oignon ? "Le kebab a des oignons" : "Le kebab n'a pas d'oignons");

    readline.close()
})





