create database onlineMarket;
\c onlineMarket

create table users (
    id serial primary key,
    username varchar(100) unique,
    password varchar(100),
    firstname varchar(100),
    lastname varchar(100),
    email varchar(100) unique,
    role varchar(100) default 'user',
    adress varchar(100)
);

create table products(
    id serial primary key,
    name varchar(100),
    quantity int,
    price int,
    type varchar(50),
    user_id int references users(id) on delete cascade
);

create table comments (
    id serial primary key,
    comment_text text,
    user_id int references users(id) on delete cascade,
    product_id int references products(id) on delete cascade
);

create table orders (
    id serial primary key,
    product_id int references products(id) on delete cascade,
    user_id int references users(id) on delete cascade,
    delivey_date date
);

