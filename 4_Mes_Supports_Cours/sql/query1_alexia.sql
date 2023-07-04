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