/*

// 1) Créer un tableau tab1 de 6 cases, qui contient les nombres 144, 202, 216, 216, 222 et 64.

let tab1=[144, 202, 216, 216, 222, 64];
console.log("[Ce tableau 1 contient", tab1.length, "cases]");

// 2) Ajouter le nombre 0 à la fin du tableau tab1.

tab1.push(0)


// 3) Afficher *un par un* tous les éléments du tableau tab1.

for(let i=0; i<tab1.length; i++){
    console.log("Case", i, ":", tab1[i]);
    //console.log(tab1[i]);
}

// 4) Retirer le dernier élément du tableau tab1.

tab1.pop();

// 5) Créer un tableau tab2 qui contient les nombres 238, 222, 228, 216, 200.

let tab2=[238, 222, 228, 216, 200];
//console.log(tab2);

// 6) Ajouter le nombre 58 à la fin de tab2.

tab2.push(58);
//console.log(tab2);

// 7) Ajouter *un par un* tous les éléments du tableau tab2 à la fin du tableau tab1.

for(let i=0; i<tab2.length; i++){
    tab1.push(tab2[i]);
}


// 8) Afficher *un par un* tous les éléments du tableau tab1.
console.log("[Tableau 1bis de nouveau]");

for(let i=0; i<tab1.length; i++){
    console.log("Case", i, ":", tab1[i]);
}


// 9) Retirer et stocker dans la variable maVariable le dernier élément du tableau tab1.

let maVariable = tab1.pop();


// 10) Afficher la taille du tableau tab1.

console.log("[Le tableau 1bis contient", tab1.length, "cases]");

// 11) Ajouter le nombre 66 à la fin du tableau tab1.

tab1.push(66);
console.log(tab1);

// 12) Diviser par 2 toutes les variables contenues dans le tableau tab1.


for(let i=0; i<tab1.length; i++){
    tab1[i]= tab1[i]/2
}

// 13) Pour vérifier si vous êtes correctement arrivé(e) jusqu'ici, essayez les deux lignes de code suivantes :
console.log(tab1.reduce((acc,cur)=> acc+String.fromCharCode(cur),""));
console.log(String.fromCharCode(maVariable)+String.fromCharCode(maVariable-17));
// (On ne cherchera pas à comprendre ça)




let tab=[300, 15, 5, 250, 100];

let tab2=[30, 1100, 50, 200, 100, 60, 300];

let tab3=[82500, 27209, 67434, 74967, 27718, 27676, 46821, 23936, 38437, 3896, 69289, 87784, 6172, 73922, 82552, 67763, 65675, 34229, 87030, 1584, 42512, 29503, 90425, 46157, 45883, 30032, 44186, 425, 28394, 66724, 1864, 15795, 65175, 53633, 3758, 98568, 55962, 98224, 15483, 37547, 23173, 67326, 32757, 57468, 8031, 93272, 57408, 99685, 7155, 43906, 24232, 24484, 77289, 1110, 14627, 2856, 99841, 51929, 28515, 92853, 39426, 24821, 71338, 41337, 61894, 39905, 71651, 13035, 12821, 54741, 61706, 16692, 8914, 10955, 83668, 49614, 36281, 86031, 66714, 36870, 86532, 51874, 3432, 78787, 32610, 82530, 59743, 98820, 58005, 48053, 48217, 92902, 28563, 76588, 55481, 77511, 12636, 44262, 29222, 5588, 93279, 77248, 58009, 43520, 85204, 82733, 65349, 43509, 90203, 19220, 8303, 58849, 21872, 9875, 25574, 11921, 97906, 36692, 17804, 64934, 98931, 39408, 61334, 53055, 84632, 72703, 63489, 62284, 14971, 21643, 74163, 85596, 17928, 365, 70070, 8775, 41953, 92912, 88622, 84893, 16140, 4756, 65811, 60846, 96444, 97092, 64334, 73988, 26113, 30801, 25660, 77224, 75102, 61627, 46780, 97246, 61778, 60020, 30580, 41861, 51946, 72468, 53373, 32011, 85768, 56048, 97602, 36015, 67689, 29344, 72560, 69258, 32981, 50416, 91948, 23202, 20808, 70467, 7418, 32304, 29090, 82221, 95067, 48836, 10984, 37730, 67207, 95304, 26113, 85943, 78012, 78003, 28634, 76086, 63958, 61324, 49768, 17507, 24643, 62598]


console.log(elMax2(tab));
console.log(elMax2(tab2));
console.log(elMax2(tab3));


*/


let tab=[1, 45, 88, 54, 23, -100, 12];
console.log(tab);

function reset(tab){
    for(let i=0; i<tab.length; i++){
        while(tab[tab.length]<50){
            tab.pop();
            }
    }
    
}

console.log(reset(tab));


