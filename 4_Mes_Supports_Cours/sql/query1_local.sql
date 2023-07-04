drop database test; 
create database if not exists test;
use test;
/* create USER 'alexia'@'localhost' identified by 'password1234'; */
-- pour créer un commentaire # /**/ --
grant ALL privileges on test.* to 'alexia'@'localhost' ; /* pour garantir tous les droits à l'utilisateur, écrire "grant ALL privileges on *.* to 'username'@'hostname';" */
grant ALL privileges on *.* to 'alexia2'@'localhost' ; 
flush privileges;
show grants for 'alexia'@'localhost';
show grants for 'alexia2'@'localhost';

create database if not exists test;

create database test2;
create table employes(
id int not null,
nom varchar(100) not null,
email varchar(100) not null unique,
age int not null check (age>=18),
salaire decimal(8,2) default 3000.00,
primary key (id)
);

create table conges(
id int primary key not null auto_increment,
date_debut date not null,
date_fin date not null,
id_employe int,
constraint fk_id_employe foreign key (id_employe) references employes(id)
);

drop table users1;




