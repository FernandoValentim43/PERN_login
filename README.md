# PERN_login
Simple login application made with the PERN(PostgreSQL, Express, React, and NodeJS) stack. After creating the database, the user can create a new account, or login into a already created one, then proceed to access a restricted route. After the login, a JSON Web Token is created for a limited time to grant access without need to login again

##  Creating the databse
- Initialize on psql a new database called pern_auth

- create a table as the following: 

`create table users(
    user_id serial PRIMARY KEY unique,
    username varchar(255) not null unique,
    password varchar(255) not null,
    created_at date DEFAULT CURRENT_DATE,
    balance  MONEY DEFAULT 100
);`

##  Initialize the project backend
> cd server 

> npm install --global yarn

> yarn 

> yarn dev (to start the backend)

> check the server door

##  Initialize the project frontend
> cd client 

> npm install --global yarn

> yarn 

> yarn start (to start the frontend)




