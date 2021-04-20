//exo 1
// let nombre1 = +prompt("Tape un nombre");
// let nombre2 = +prompt("Tape un nombre");
// if (nombre1 == nombre2) {
//     alert(`Le nombre ${nombre1} et le
//     nombre ${nombre2} sont-ils égaux ? \n réponse : oui`)
// }
// else {
//     alert(`Le nombre ${nombre1} et le
//     nombre ${nombre2} sont-ils égaux ? \n réponse : non`)
// }
//exo 2

// let nombre1 = +prompt("Tape un nombre");
// let nombre2 = +prompt("Tape un nombre");
// if (nombre1 < nombre2) {
//     alert(`Le nombre ${nombre1} est il plus petit que le
//     nombre ${nombre2} ? \n réponse : oui`)
// }
// else {
//     alert(`Le nombre ${nombre1} est il plus petit que le
//     nombre ${nombre2} ? \n réponse : non`)
// }

//exo 3
// let nombre1 = +prompt("Tape un nombre");
// let nombre2 = +prompt("Tape un nombre");
// let nombre3 = +prompt("Tape un nombre");
// let comparaison = nombre1 + nombre2 > nombre3
// if (nombre1 + nombre2 > nombre3) {
//     alert(`La somme du nombre x
//     + le nombre y est-elle plus grande que le nombre z ? : ${comparaison}`)
// }
// else {
//     alert(`La somme du nombre x
//     + le nombre y est-elle plus grande que le nombre z ? : reponse : non`)
// }

//exo 4

// let phrase = prompt("Tape une phrase random");
// let nombreCaractere = phrase.length;
// let estimation = +prompt("Combien de caractere compte ta phrase");
// let difference = Math.abs(phrase - nombreCaractere);

// if (nombreCaractere == estimation) {
//     alert("Bien joué tu as la bonne réponse")
// }
// else {
//     alert(`Réponse fausse tu es a ${difference} unités de la bonne réponse`)
// }

// exo 5

// let prenom = prompt("Ecrit ton prenom")
// if (prenom == undefined) {
//     alert("Tu na pas ecrit ton prenom ecrit le !!!!")
//     prenom = prompt("Ecrit ton prenom")
// }
// else {
//     alert(`Bonjour ${prenom}`)
// }

//exo 6

// let abonnement = prompt("Voulez vous vous abonnez ?");
// abonnement.trim().toLowerCase();

// if (abonnement == "oui") {
//     let abonnementType = prompt("Voulez vous notre formule luxe ou normale")

//     if (abonnementType == "luxe") {
//         alert("Félicitation vous avez choisis la formule luxe ! \n Merci de votre abonnement.")
//     }
//     else if (abonnementType == "normale") {
//         alert("Merci pour votre abonnement");
//     }
//     else {
//         if (abonnement == "non") {

//             let abonnementType = prompt("Voulez vous notre formule luxe ou normale");
//             abonnementType.trim().toLowerCase();

//             if (abonnementType == "luxe") {
//                 alert("Félicitation vous avez choisis la formule luxe ! \n Merci de votre abonnement.");

//             } else {
//                 alert("Merci pour votre abonnement");
//             }
//         }
//         else {
//             alert("C'est dommage. Une bonne journée")
//         }
//     }

// }
// else {
//     let abonnementType = prompt("Voulez vous notre formule luxe ou normale");
//     abonnementType.trim().toLowerCase();

//     if (abonnementType == "luxe") {
//         alert("Félicitation vous avez choisis la formule luxe ! \n Merci de votre abonnement.");

//     } else {
//         alert("Merci pour votre abonnement");
//     }
// }


// exo 7

// let q1 = prompt("Mon nom ?").trim().toLowerCase;
// let q2 = prompt("Mon prenom ?").trim().toLowerCase;
// let r1 = "van san"
// let r2 = "alexis"

// if (r1 != q1 && r2 != q2) {
//     alert("échoué")
// }
// else if (r1 == q1 || r2 == q2) {
//     if (r1 == q1) {
//         alert("Tu y est presque tu a bien répondu à la première question")
//     }
//     else {
//         alert("Tu y est presque tu a bien répondu à la deuxième question")
//     }
// }
// else {
//     alert("félicitation");
// }

// exo 8

// let userAge = +prompt("Votre année de naissance");
// let dateCurrentYear = new Date().getFullYear();
// userAge = dateCurrentYear - userAge;

// if (userAge < 18) {
//     if (userAge <= 0) {
//         alert("Vous êtes mineur");
//     }
// }
// else if (userAge == 18) {
//     alert("Vous avez pile poil l'age");
// }
// else {
//     if (userAge >= 100) {
//         alert("vous etes trop vieux");
//     }
//     else {
//         alert("Vous êtes majeur");
//     }
// }


// exo 9

let prompt1 = prompt("Est ce que vous êtes riche ?");
let prompt2 = prompt("Voulez vous partir en vacances ?");
let prompt3 = prompt("Est ce que vous avez un chat ?");

if (prompt1 == "oui") {
    prompt1 = true
}
else {
    prompt1 = false
}
if (prompt2 == "oui") {
    prompt2 = true
}
else {
    prompt2 = false
}
if (prompt3 == "oui") {
    prompt3 = true
}
else {
    prompt3 = false
}


if (prompt2 != true) {
    alert("pas de problème")
    if (prompt1 != true || prompt3 == true) {
        alert("Vous ne pouvez pas partir")
    }
    else if (prompt1 != false && prompt3 != false) {
        alert("Vous pourriez partir en vacances")
    }
}
if (prompt1 != false && prompt2 != false && prompt3 != true) {
    alert("partez en vacance !!!")
}
if (prompt1 != false || prompt3 != true || prompt2 != false) {
    alert("partez en vacances")
}