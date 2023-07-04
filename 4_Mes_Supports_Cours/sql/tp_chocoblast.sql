create database chocoblast;
use chocoblast;

create table utilisateur(
	id_utilisateur int primary key not null auto_increment,
    nom varchar(50),
    prenom varchar(50),
    email varchar(50),
    password varchar(100),
    image varchar(100),
    statut tinyint(1) not null,
    id_roles int not null
    )Engine=InnoDB;

create table chocoblast(
	id_chocoblast int primary key not null auto_increment,
    slogan longtext,
    date_creation date not null,
    statut tinyint(1) not null,
    cible int not null,
    auteur int not null
    )Engine=innoDB;

create table commentaire(
	id_commentaire int primary key not null auto_increment,
    note int not null,
    contenu longtext,
    date_creation datetime not null,
    statut tinyint(1) not null,
    id_chocoblast int not null,
    auteur int not null
    )Engine=InnoDB;

create table roles(
	id_roles int primary key not null auto_increment,
    nom varchar(50)
    )Engine=InnoDB;

alter table utilisateur
	add constraint fk_posseder_roles
    foreign key (id_roles)
    references roles(id_roles);

alter table commentaire
	add constraint fk_poster_commentaire
    foreign key (auteur)
    references utilisateur(id_utilisateur),
    add constraint fk_rattacher_chocoblast
    foreign key (id_chocoblast)
    references chocoblast(id_chocoblast);

alter table chocoblast
	add constraint fk_chocoblaster_utilisateur
    foreign key (auteur)
    references utilisateur(id_utilisateur),
    add constraint fk_cibler_utilisateur
    foreign key (cible)
    references utilisateur(id_utilisateur);
