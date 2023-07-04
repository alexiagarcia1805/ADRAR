create database test2;
use test2;
create table employes(
id int not null,
nom varchar(100) not null,
email varchar(100) not null unique,
age int not null check (age>=18),
salaire decimal(8,2) default 3000.00,
id int primary key auto_increment,
);

create table conges(
id int primary key not null auto_increment,
date_debut date not null,
date_fin date not null,
id_employe int,
constraint fk_id_employe foreign key (id_employe) references employes(id)
);

