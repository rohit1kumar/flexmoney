# Yoga Class Booking App

## ReactJS + ExpressJS + MySQL
## Introduction
This is a simple Yoga Class Booking App. In this project I've used ReactJS for the frontend, ExpressJS for the backend, MySQL for production database

## Features
(**Note: While creating the project my aim was to focus entirely in the Backend part**)

 The API has minimal features like:
- User Authentication (Login, Signup, Logout)
- Choosing a Batch (6-7AM, 7-8AM, 8-9AM and 5-6PM)
- Changing the Batch (next month)
- A Fake Payment
---
## ER Diagram
![ER Diagram](https://i.imgur.com/JZqlNFs.png)

 *Why I chose this ER Diagram?*

 I've chosen this ER Diagram because I wanted to keep it simple and easy to understand. I've used the concept of **One to One** relationship between the **User** and **Batch** table as a user can only have one batch at a time. And **One to Many** relationship between the **User** and **Payment** table as a user can have multiple payments in different months.

 ---

*I am not a React developer I hope you don't mind :p*

---

## API Documentation
## How to run this project
### Clone the repository
    git clone https://github.com/rohit1kumar/flexmoney.git

### Change the directory
    cd flexmoney

### change the directory to client
    cd client

### Install the dependencies and start the client
    npm install && npm start
### Change the directory to server
    cd server
### Add environment variables by renaming the .env.example file to .env

    DATABASE_NAME=<your database name>
    DATABASE_USER=<you database user>
    DATABASE_PASSWORD=<your database password>
    DATABASE_HOST="localhost"
    DATABASE_PORT="3306"
    JWT_SECRET="jwt_secret"
### Base URL
    http://localhost:3000/api/v1
## API Endpoints
|  REQUEST  |  ENDPOINT         |  DESCRIPTION
|    ---    |    ---            |     ---
| POST      | /user/register    | Register user with name, email and password and date of birth
| POST      | /user/login       | Login user with email and password
| GET       | /user/logout      | Logout user
| GET       | /user/me          | Info about the loginned user
| POST      | /batch/join       | Add user to a batch with timing and pay the amount
| PATCH     | /batch/Change     | Change the Batch and Pay the amount
| GET       | /payment/all      | Get all the payments with pagination (its not protected)

## Want to test the API?

Import the **yoga.postman_collection.json** file in your postman and test the API endpoints with the help of video below

<!-- <video width="320" height="240" controls>
  <source src="https://i.imgur.com/GKJKny7.mp4" type="video/mp4">
</video> -->

<video width="320" height="240" controls>
  <source src="https://www.youtube.com/watch?v=46YU0-6wXVs" type="video/mp4">
</video>