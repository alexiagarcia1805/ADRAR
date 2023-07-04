create database sale_product;
use sale_product;
create table product (
	id_product int primary key not null auto_increment,
    name_product varchar(50),
    description_product longtext,
    price_product decimal(6,2) not null,
    id_category  int not null
)Engine=InnoDB;

create table category (
	id_category int primary key not null auto_increment,
    name_category varchar(50)
)Engine=InnoDB;

create table seller (
	id_seller int primary key not null auto_increment,
    name_seller varchar(50),
    first_name_seller varchar(50)
)Engine=InnoDB;

create table receipt (
	id_receipt int primary key not null auto_increment,
    date_receipt datetime not null,
    id_seller int not null
)Engine=InnoDB;

create table to_add (
	id_product int not null,
    id_receipt int not null,
    qtx_add int not null,
	primary key(id_product, id_receipt)
)Engine=InnoDB;

alter table product
	add constraint fk_to_have_category
    foreign key (id_category)
    references category(id_category);

alter table receipt
	add constraint fk_to_have_seller
    foreign key (id_seller)
    references seller(id_seller);
    
alter table to_add
	add constraint fk_to_add_product
    foreign key (id_product)
    references product(id_product);

alter table to_add
	add constraint fk_to_add_receipt
    foreign key (id_receipt)
    references receipt(id_receipt);
    

    
    