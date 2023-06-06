// Écrire une fonction f1 qui ne prend rien en entrée, et qui affiche 17 dans la console.

function f1(){
    console.log(17);
}


// Utiliser la fonction f1 pour afficher 17 dans la console.

console.log(f1());
f1();

// Écrire une fonction f2 qui ne prend rien en entrée, et qui retourne 18.

function f2(){
    return 18;
}

// Utiliser la fonction f2 pour afficher 18 dans la console.

console.log(f2());
console.log(17+1);

// La fonction f2 a l'air moins pratique à utiliser. Quel intérêt pourrait-elle avoir par rapport à f1 ?

//La fonction f1 est spécialisée pour afficher 17 dans la console. Si c'est ce que l'on souhaite faire, elle est plus pratique que f2. En revanche, on ne peut pas faire autre chose du 17 avec la fonction f1. Moins pratique car plus à écrire, mais il y a plus de liberté avec f2, on peut faire ce qu'on veut du résultat (le mettre dans une variable, l'écrire dans la console, l'afficher dans un titre dans l'HTML...)

// Écrire une fonction f3 qui prend un nombre en entrée et qui affiche dans la console le double de ce nombre.


function f3(n){
    console.log(2*n);
}


// Utiliser la fonction f3 pour écrire dans la console le double de 99.

f3(99);

// Écrire une fonction f4 qui prend un nombre en entrée et qui retourne le double de ce nombre.


function f4(n){
    return 2*n;
}

// Utiliser la fonction f4 pour écrire dans la console le double de 99.

console.log(f4(99));

// Utiliser la fonction f4 pour stocker dans une variable appelée a le double de 99.


let a=f4(99);
console.log("La variable a contient", a);



// Écrire une fonction f5 qui prend en entrée deux nombres et qui affiche dans la console la somme de ces deux nombres.

function f5(a, b){
    console.log(a+b);
}

// Utiliser la fonction f5 pour écrire dans la console la somme de 42 et 77.


f5(42, 77);  

// Écrire une fonction f6 qui prend en entrée deux nombres et qui retourne la somme de ces deux nombres.

function f6(n1, n2){
    return n1+n2
}

// Utiliser la fonction f6 pour écrire dans la console la somme de 42 et 77.

console.log(f6(42, 77));   

// Utiliser la fonction f6 pour incrémenter la variable a de la somme de 42 et 77.

a = a + f6(42, 77);

//

a = f6(a, f6(10, 15));

//

a += f6(10, 15);

console.log("La nouvelle valeur de a est", a);

// Écrire une fonction f7 qui prend deux nombres en entrée et qui retourne le plus grand des deux.

function f7(n1, n2){
    if(n1>n2){
    return n1;
    } else {
        return n2;
    }
}

console.log("Le plus grand entre 10 et 15 est", f7(10, 15));



// Écrire une fonction f8 qui prend trois nombres en entrée et qui retourne le plus grand des trois.
// (Au moins deux versions possibles : sans utiliser f7, et en utilisant f7).

function f8(n1, n2, n3){
    let max_1_2 = f7(n1, n2);
    return f7(max_1_2, n3);
}

//

function f8(n1, n2, n3){
    return f7(f7(n1, n2), n3);
}


function f8(n3, f7){
    if(n3<f7){
    return f7;
    } else {
        return n3;
    }
} 

//


function f8(n1, n2, n3){
    if(n1>n2){
        if(n1>n3){
            return n1;
        } else {
            return n3;
        }
    } else {
        if(n2>n3){
            return n2;
        } else {
            return n3;
        }
    }
}

//

function f8(n1, n2, n3){
    if(n1>=n2 && n1>=n3){
        return n1;
    } else if (n2>n3){
        return n2;
    } else {
        return n3;
    }
}


console.log("Le plus grand entre 10, 12 et 15 est", f8(10, 12, 15));


// Écrire une fonction f9 qui prend un nombre et un mot en entrée, et qui affiche dans la console ce mot ce nombre de fois. 

function f9(number, word) {
    for(let i=0; i<number; i++){
    console.log(word);
    }
}

f9(14, "bonjour"); 