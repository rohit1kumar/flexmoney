# Yoga Class Booking App

## ReactJS + ExpressJS + MongoDB + Ngnix + Docker Compose
## Introduction
This is a simple Yoga Class Booking App. In this project I've used ReactJS for the frontend, ExpressJS for the backend, MySQL for production database, Nginx for revrese proxy and load balancing.
Then I have Dockerize my project into 3 containers. i.e backend (ExpressJS), db (MySQL), webserver (Nginx).

And finally I've used Docker Compose for running multiple containers as a single service.
## Infrastructre Diagram of Socialgram
![Infrastructre Diagram of Socialgram](https://i.imgur.com/VGSOP7E.png)

## Walkthrough of the project
(**Note: While creating the project my aim was to focus entirely in the Backend part and infra part**)

The API has minimal features like:
- User Authentication (Login, Signup, Logout)
- Choosing a Batch (6-7AM, 7-8AM, 8-9AM and 5-6PM)
- Changing the Batch (next month)
- A Fake Payment

Constructed an authentication system using JWT.

## How to run this project
### Clone the repository
    git clone https://github.com/rohit1kumar/flexmoney.git

### Change the directory
    cd social-gram
### Add environment variables
    DATABASE_NAME="yogadb"
    DATABASE_USER="root"
    DATABASE_PASSWORD="password"
    DATABASE_HOST="localhost"
    DATABASE_PORT="3306"
    JWT_SECRET="jwt_secret"
    PORT="4000"

### Build and run the project in docker
    docker-compose -f docker-compose.yml up -d --build
### Stop and remove the containers
    docker-compose -f docker-compose.yml down -v
### Base URL
    http://localhost:3000/api/v1
## API Endpoints

### Use Postman to test the API endpoints
