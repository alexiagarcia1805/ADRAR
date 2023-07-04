-- create database shop_db; --
use shop_db;

create user 'admintest'@'localhost' identified by 'password1234';
create user 'developer'@'localhost' identified by 'password1234';
create user 'bastien'@'localhost' identified by 'password1234';
grant all privileges on shop_db.* to 'bastien'@'localhost' ;
flush privileges;

create table Customer (
	id_customer int primary key auto_increment,
    username varchar(16) not null unique,
    email varchar(255) not null unique,
    password varchar(32) not null,
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

create table Adress (
	id_adress int primary key auto_increment,
    road_number int,
    road_name varchar(100) not null,
    zip_code char(5) not null,
    city_name varchar(100) not null,
    country_name varchar(100) not null
    );

create table Orders (
	id_orders int primary key auto_increment,
    ref varchar(45) not null unique,
    date date not null,
    shipping_cost decimal(6,2) default 0.00,
    total_amount decimal(6,2) default 0.00
    );

create table Product (
	ref char(20) primary key,
    name varchar(100) not null,
    price decimal(6,2) not null,
    description longtext,
    stock int default 0.0
    );


	
    
    


    
    