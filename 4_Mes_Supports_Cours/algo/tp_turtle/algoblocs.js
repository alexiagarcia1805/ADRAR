// alert("Bonjour");


/*// Série A
// A1
// Initialisation
setPos(300, 300);
changeColor(color.red);
setLineWidth(10)
forward(200);

// Réalisation
faceRight();
forward(100);

// A2
// Initialisation
setPos(300, 300);
changeColor(color.blue);
setLineWidth(10);

// Réalisation
faceLeft();
forward(100);
faceDown();
forward(100);
faceRight();
forward(200);
faceUp();
forward(200); 

// A3
// Initialisation
setPos(300, 300);
changeColor(color.fuchsia);
setLineWidth(10);

// Réalisation
faceLeft();
forward(100);
backward(100);
faceUp();
forward(100);
backward(100);
faceDown();
forward(100);
backward(100);
faceRight();
forward(100);
backward(100); 

// A3
// Initialisation
setPos(500, 100);
changeColor(color.green);
setLineWidth(10)

// Réalisation
faceLeft();
forward(200);
arcLeft(100, 180);
forward(100);
arcRight(100, 180);
forward(200); 

// A4
// Initialisation
setPos(300, 500);
changeColor(color.yellow);
setLineWidth(10);

// Réalisation
faceRight();
arcLeft(200, 180);
arcLeft(200, 180);
arcLeft(100, 180);
arcRight(100, 180); 

// A5
// Initialisation
setPos(300, 500);
changeColor(color.aqua);
setLineWidth(10);

// Réalisation
faceUp();
forward(100);
up();
forward(100);
down();
forward(200); 

// A6
// initialisation
setPos(200, 300);
changeColor(color.green)
setLineWidth(10);

// Réalisation
faceDown();
forward(200);
arcLeft(100, 180);
forward(100);
up();
forward(100);
down();
forward(200);
arcLeft(100, 180);
forward(100); 

// A7
// Initialisation
setPos(300, 300);
changeColor(color.fuchsia);
setLineWidth(10);
faceUp();


// Série B
// B1
// Initialisation
setPos(100, 100);
changeColor(color.green);
setLineWidth(10);
faceRight();

for(let i=0; i<4; i++) {
    forward(100);
    faceDown();
    forward(100);
    faceRight();
}


// B2
// Initialisation
setPos(100, 300);
changeColor(color.red);
setLineWidth(10)


// Réalisation
for(let i=0; i<4; i++) {  
    faceUp();
    forward(50);
    faceRight();
    forward(50);
    faceDown();
    forward(50);
    faceRight();
    forward(50);
}

// B3
// Initialisation
setPos(300, 100);
changeColor(color.fuchsia);
setLineWidth(10);
faceRight();

// Réalisation
for(let i=0; i<4; i++) {
    forward(200);
    right(180-90);
    forward(200);
} 

// B4
// Initialisation
setPos(200, 300);
changeColor(color.aqua);
setLineWidth(10);
faceRight();

// Réalisation
for(let i=0; i<3; i++){
    forward(200);
    left(180-60)
}

// B5
// Initialisation
setPos(300, 400);
changeColor(color.yellow);
setLineWidth(10);
faceUp();

// Réalisation
forward(200);
changeColor(color.red);


for(let i=0; i<3; i++) {
    forward(100);
    right(180-60);
}  

// B6
// Initialisation
setPos(50, 400);
changeColor(color.red);
setLineWidth(10);
faceRight();

// Réalisation
for(let i=0; i<2; i++) {
    forward(100);
    faceUp();
    forward(100);
    faceRight();
}
changeColor(color.green);
for(let i=0; i<3; i++){
    forward(100);
    faceDown();
    forward(100);
    faceRight();
} 
// Série C
// C1
// Initialisation
setPos(50, 400);
changeColor(color.red);
setLineWidth(10);
faceRight();

// Réalisation
for(let i=0; i<4; i++){
    for(let j=0; j<3; j++){
        forward(50);
        right(180-60);
    }
    
    forward(50);
}

//C2
// Initialisation
setPos(300, 500);
changeColor(color.fuchsia);
setLineWidth(10);
faceUp();

//Réalisation
for(let i=0; i<5; i++){
    for(let j=0; j<4; j++){
        forward(50);
        right(180-90);
    }
    up();
    forward(100);
    down();
} 

// C3
// Initialisation
setPos(50, 300);
shiftColor(0.4);
setLineWidth(10);
faceRight();

// Réalisation
for(let i=0; i<3; i++){
    for(let j=0; j<8; j++){
        forward(100);
        left(180-45);
    }
    up();
    shiftColor(0.1);
    forward(200);
    down();
}


// C4
// Initialisation
setPos(50, 300);
changeColor(color.red);
setLineWidth(10);
faceRight();

// Réalisation
for(let i=0; i<5; i++){
    for(let j=0; j<3; j++){
        forward(100);
        left(180-60);
    }
    changeColor(color.yellow)
    for(let j=0; j<4; j++){
        forward(100);
        right(180-90);
    }
    up();
    forward(200);
    down();
    changeColor(color.red)
} 

// C5
// Initialisation
setPos(300, 300);
shiftColor(0.2)
setLineWidth(10)
faceRight();

// Réalisation
for(let i=0; i<4; i++){
    for(let j=0; j<8; j++){
        forward(200);
        left(180-45);
    }
    right(180-90);
    shiftColor(0.25);
}

// C6
// Initialisation
setPos(300, 400);
changeColor(color.yellow);
setLineWidth(10);
faceRight();

// Réalisation
for(let i=0; i<3; i++){
    forward(200)
    for(let j=0; j<4; j++){
        left(180-60);
        forward(200);
    }
}

// C7
// Initialisation
setPos(250, 400);
changeColor(color.blue);
setLineWidth(10);
faceRight();

// Réalisation
for(let i=0; i<8; i++){
    for(let j=0; j<3; j++){
        forward(100);
        right(180-60);
    }
    forward(100);
    left(180-135);
}

// C8
// Initialisation
setPos(300, 500);
changeColor(color.green);
setLineWidth(10);
faceUp();

// Réalisation
forward(200);
right(180-135);

for(let i=0; i<4; i++){
    changeColor(color.red);
    for(let j=0; j<3; j++){
        forward(100);
        right(180-60);
    }
    changeColor(color.yellow);
    forward(100);
    left(180-90);
}


// C9
// Initialisation
setPos(400, 400);
changeColor(color.green);
setLineWidth(10);
faceRight();

// Réalisation
for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){
        for(let k=0; k<4; k++){
            right(180-90);
            forward(50);
        }
        forward(50);
        right(180-60);
    }
    left(180-60);
    forward(200);
}  

// C10
// Initialisation
setPos(300, 100);
changeColor(color.red);
setLineWidth(10);
faceDown();

// Réalisation
for(let i=0; i<4; i++){
    for(let j=0; j<4; j++){
        forward(50);
        for(let k=0; k<4; k++){
            left(180-90);
            forward(25);
        }
        right(180-90);
    }
    forward(100);
}



// Déclaration d'une variable
let longueur;

// Affecter une valeur à une variable
longueur = 42

// Lire le contenu d'une variable
// Alerte(longueur);

console.log(longueur);

// Initialiser et affecter une variable (les 2 en même temps)
let price3 = 123;




// D9
// Initialisation
setPos(300, 200);
changeColor(color.blue);
setLineWidth(10);
faceRight();

// Réalisation
let length=100;
for(let i=0; i<6; i++){
    forward(length);
    right(120);
    length=length+100;
    //length+=100;
}


// D10
// Initialisation
setPos(250, 250);
changeColor(color.yellow);
setLineWidth(10);
faceRight();

// Réalisation
let length=100;
for(let i=0; i<10; i++){
    forward(length);
    right(180-90);
    length=length+50;
}

// D11
// Initialisation
setPos(50,300);
setLineWidth(10);
changeColor(color.aqua);
faceRight();

// Réalisation
let length=200;
for(let i=0; i<5; i++){
    for(let j=0; j<3; j++){
        forward(length);
        left(180-60);
    }
    forward(length);
    length=length-50
}  */

// D12
// Initialisation
setPos()