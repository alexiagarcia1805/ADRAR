/* create user 'alexia3'@'localhost' identified by 'password1234'*/
create table users (
id int primary key not null auto_increment,
name varchar(100),
email varchar(255) not null,
birthdate date);
create table users1 (
id int primary key not null auto_increment,
name varchar(100),
email varchar(255) not null,
birthdate date);

alter table users
add firstname varchar(100) after name;

create index index_users_birthdate on users(birthdate);
create index index_users_email on users(email);


