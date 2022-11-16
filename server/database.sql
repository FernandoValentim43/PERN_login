create table users(
    user_id serial PRIMARY KEY unique,
    password varchar(255) not null,
    created_at date DEFAULT CURRENT_DATE,
    balance  MONEY DEFAULT 100
);