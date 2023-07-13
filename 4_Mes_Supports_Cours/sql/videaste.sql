create database artiste;
use artiste;

-- table classique

create table utilisateur(
id_utilisateur int primary key auto_increment not null,
nom_utilisateur varchar(50) not null,
prenom_utilisateur varchar(50) not null,
email_utilisateur varchar(50) unique not null,
password_utilisateur varchar(100) not null,
statut_utilisateur tinyint(1) default 0,
id_role_utilisateur int
)Engine=InnoDB;

create table role_utilisateur(
id_role_utilisateur int primary key auto_increment not null,
nom_role_utilisateur varchar(50) not null
)Engine=InnoDB;

create table article(
id_article int primary key auto_increment not null,
titre_article varchar(50) not null,
date_article datetime not null,
statut tinyint(1) default 0,
contenu_article text not null,
id_categorie int,
id_utilisateur int
)Engine=InnoDB;

create table categorie(
id_categorie int primary key auto_increment not null,
nom_categorie varchar(50) not null
)Engine=InnoDB;

create table message(
id_message int primary key auto_increment not null,
contenu_message varchar(200) not null,
date_message datetime not null,
statut_message tinyint(1) default 0
)Engine=InnoDB;

create table media(
id_media int primary key auto_increment not null,
url_media varchar(100) not null,
nom_media varchar(50) not null
)Engine=InnoDB;

create table commentaire(
id_commentaire int primary key auto_increment not null,
message_commentaire varchar(200) not null,
date_commentaire datetime not null,
statut_commentaire tinyint(1) default 0,
id_article int,
id_utilisateur int
)Engine=InnoDB;

create table groupe(
id_groupe int primary key auto_increment not null,
nom_groupe varchar(50) not null
)Engine=InnoDB;

-- table association

create table abonner(
abonne int not null,
utilisateur int not null,
primary key(abonne, utilisateur)
)Engine=InnoDB;

create table appartenir(
id_utilisateur int not null,
id_groupe int not null,
primary key(id_utilisateur, id_groupe)
)Engine=InnoDB;

create table illustrer(
id_article int not null,
id_media int not null,
primary key(id_article, id_media)
)Engine=InnoDB;

create table envoyer(
destinataire int not null,
expediteur int not null,
id_message int not null,
primary key(destinataire,expediteur,id_message)
)Engine=InnoDB;

-- contraintes foreign key

alter table utilisateur
add constraint fk_posseder_role
foreign key(id_role_utilisateur)
references role_utilisateur(id_role_utilisateur);

alter table article
add constraint fk_rediger_utilisateur
foreign key(id_utilisateur)
references utilisateur(id_utilisateur);

alter table article
add constraint fk_categoriser_categorie
foreign key(id_categorie)
references categorie(id_categorie);

alter table commentaire
add constraint fk_completer_utilisateur
foreign key(id_utilisateur)
references utilisateur(id_utilisateur);

alter table commentaire
add constraint fk_completer_commentaire
foreign key(id_article)
references article(id_article);

-- contrainte table association

alter table abonner
add constraint fk_abonner_utilisateur
foreign key(utilisateur)
references utilisateur(id_utilisateur);

alter table abonner
add constraint fk_abonner_abonne
foreign key(abonne)
references utilisateur(id_utilisateur);

alter table appartenir
add constraint fk_appartenir_utilisateur
foreign key(id_utilisateur)
references utilisateur(id_utilisateur);

alter table appartenir
add constraint fk_appartenir_groupe
foreign key(id_groupe)
references groupe(id_groupe);

alter table illustrer
add constraint fk_illustrer_article
foreign key(id_article)
references article(id_article);

alter table illustrer
add constraint fk_illustrer_media
foreign key(id_media)
references media(id_media);

alter table envoyer
add constraint fk_envoyer_destinataire
foreign key(destinataire)
references utilisateur(id_utilisateur);

alter table envoyer
add constraint fk_envoyer_expediteur
foreign key(expediteur)
references utilisateur(id_utilisateur);

alter table envoyer
add constraint fk_envoyer_message
foreign key(id_message)
references message(id_message);

-- Ajouter des tables

-- -table classique :
-- table role_utilisateur : créer 3 rôles (utilisateur, artiste, admin),

insert into role_utilisateur(nom_role_utilisateur) values ('utilisateur'), ('artiste'), ('admin');
-- table utilisateur : créer 4 utilisateurs,
insert into utilisateur(nom_utilisateur, prenom_utilisateur, email_utilisateur, 
password_utilisateur, id_role_utilisateur) values 
('Dupond', 'Paul', 'test@test.com', md5('1234'), 1),
('Durand', 'Anne', 'anne@test.fr', md5('123456'), 2),
('Admin', 'Principal', 'adm@google.com', md5('123456'), 3),
('Albert', 'Marie', 'albmarie@atm.org', md5('qhohdnkojf'), 2);


-- table groupe : créer 3 groupes (peinture, vidéo, dessin),

insert into groupe (nom_groupe) values ('peinture'), ('vidéo'), ('dessin');
-- table categorie : créer 3 categorie (new, actualite, oeuvre),
insert into categorie (nom_categorie) values ('new'), ('actualite'), ('oeuvre');
-- table article : créer 4 articles
insert into article(titre_article, date_article, contenu_article, id_categorie, id_utilisateur) values
('Nouveau tableau', '2023-07-10 10:25:00', 'jhoiuiklfaqofjpjsqfokl', 3, 2),
('Nouvelle peinture', '2022-11-08 10:25:00', 'qsldjhfginqsw,fkmjfkf', 3, 4),
('evenement', '2023-05-21 10:25:00', 'eqdgiqjkjgpq', 1, 1),
('Nouveau film', '2022-08-12 10:25:00', 'sqfoiqzihf,nqezog', 3, 4);
-- table media créer 3 média,
insert into media(url_media, nom_media)values ('./img2.png', 'image2'),
('./video4.mp4', 'video4'),
('./video122.mp4', 'video122');
-- table commentaire : créer 5 commentaires (lier au article et utilisateur existant)
insert into commentaire (message_commentaire, date_commentaire, id_article, id_utilisateur)
values ('sfjhuhfjfkkjfj', '2022-10-11', 1, 2),
('sqjjfuhqkslnflljfl', '2023-11-25', 2, 2),
('qdfuZHFJKAQJ', '2023-06-11', 3, 4),
('FSUHfhjkhkkfkdkldlk', '2023-04-21', 3, 4),
('sqffuhazfpiaejf', '2023-08-06', 2, 2);
-- table message : créer 5 messages,
insert into message (contenu_message, date_message) values
('<wfhouhQLFK<SJFF', '2021-02-03'),
('zqFOHzsfjzfpi', '2022-02-03'),
('sojqfhioyzqihofihqzfj', '2021-09-26'),
('sqfu<sohjfnkqeoepfk', '2023-02-03'),
('qesfyiqgefhij', '2023-08-03');
-- ------------------------------------------------------------
-- -table association :
-- table envoyer (1, 3, 1), (1, 4, 2), (2,1,3),(2,3,4), (2,4,5) (expediteur, destinataire, id_message),
insert into envoyer (expediteur, destinataire, id_message) values
(1, 3, 1), (1, 4, 2), (2,1,3),(2,3,4), (2,4,5);
-- table appartenir : (1, 1), (2, 2), (3,2), (4,3) (id_utilisateur, id_groupe),
insert into appartenir (id_utilisateur, id_groupe) values
(1, 1), (2, 2), (3,2), (4,3);
-- table illustrer : (1, 1), (1,2), (2,3), (3,3) (id_article, id_media),
insert into illustrer(id_article, id_media) values
(1, 1), (1,2), (2,3), (3,3);
-- table abonner: (1,2), (1,3),(1,4), (2,1), (2,3), (3,4), (4,1) (utilisateur, abonne). 
insert into abonner (utilisateur, abonne) values
(1,2), (1,3),(1,4), (2,1), (2,3), (3,4), (4,1);




