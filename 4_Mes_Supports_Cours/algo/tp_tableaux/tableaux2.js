// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.


function displayLast(){
    console.log(t[t.length-1])       
}

let t=[1, 4, 5, 2, 10];

displayLast(t);



// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.

function lastElement(n){
    for(let i=0; i<t.length; i++){ 
        let last=t[t.length-1]; 
        i++ 
        return last;
    }
}

let t=[1, 4, 5, 2, 10];

lastElement(t);

console.log(lastElement(t));


// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.

function min(tab){
    let min=tab[0];
    //let minPos=0;
    for(let i=1; i<tab.length; i++){
        if(tab[i]<min){
            min=tab[i];
            //minPos=i;
        } 
    }
    return min;
}

let t=[100, 15, 2, 6, -10];

console.log(min(t));


// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.

function max(tab){
    let max=tab[0];
    for(let i=1; i<tab.length; i++){
        if(tab[i]>max){
            max=tab[i];
        }
    } return maxPos;
}

// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.

function elMax2(tab){
    let max1=0;
    let max2=0;
    for(let i=0; i<tab.length; i++){
        if(tab[i]>max1){
            max2=max1;
            max1=tab[i];
        } else {
            if(tab[i]>max2){
                max2=tab[i];
            }
        }
    }
    return max2
} 

let tab=[300, 15, 5, 250, 100];
console.log(elMax2(tab));

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.

// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?










// Créer un tableau qui contient [1,2,3,...,7777].

let tab=[0];
let a=0;
for(let i=0; i<7777; i++){
    console.log(tab[a]);  
    i++
}

// Créer un tableau qui contient [10,20,30,...,77770].

// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].

// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12]); // doit afficher [1,45,88,54]


let tab=[1, 45, 88, 54, 23, -100, 12];
console.log(tab);

function reset(tab){
//    for(let i=0; i<tab.length; i++){
        while(tab[tab.length-1]<50){
            tab.pop();
            }
    }
    
//}

console.log(reset(tab));



