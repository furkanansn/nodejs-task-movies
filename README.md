# Movie FA

The live demo of the Movie FA Nodejs app can be accessed [here](https://movie-fa.onrender.com). Please note that the backend is hosted on Render's free plan. If there has been no request for a while, the backend may enter a sleeping state. In such cases, the first request may experience a delay of 15-20 seconds as the backend wakes up. Please be patient during this initial wait.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Docker](#docker)
- [Database](#database)
- [Scripts](#scripts)
- [Tests](#tests)

## Introduction

**Movie FA** is a Node.js application that provides a robust backend service for managing movie-related information. The application includes features such as database operations, and API endpoints to interact with movie data.

## Features

- Database operations with TypeORM and MySQL
- RESTful API endpoints for movie-related actions
- Dockerized for easy deployment
- Extensive test suite using Jest

## Prerequisites

Before you begin, ensure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) (or npm)
- [Docker](https://www.docker.com/)

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/furkanansn/nodejs-task-movies.git
cd nodejs-task-movies
yarn install
```

# Configuration

The application uses environment variables for configuration. Create a .env.staging and .env.production file in the project root based on the provided examples (env.staging and env.production). Adjust the values to match your environment.

# Usage
- Build and run the MySQL database Docker container.
- Build and run the Nodejs Docker container.

# Docker

Use Docker Compose to build and run the application in different environments:

Staging
```bash
docker-compose -f docker-compose.staging.yml up --build
```
Access the API at http://localhost:5001.

Production
```bash
docker-compose -f docker-compose.production.yml up --build
```
Access the API at http://localhost:5001.

# Database

A MySQL Dockerfile (Dockerfile.mysql) is provided to set up a MySQL database for the application. Customize the MySQL configuration if needed.

Build MySQL Docker Image
```bash
docker build -f Dockerfile.mysql -t movie-fa-mysql .
```

Run MySQL Docker Container
```bash
docker run -d --name movie-fa-db -p 3306:3306 movie-fa-mysql
```

Scripts

- Build and Start in Staging: yarn build:staging && yarn start:staging
- Build and Start in Production: yarn build:production && yarn start:production
- Start Development Mode: yarn start-dev
- Run Tests: yarn test
- Clean Dist Folder: yarn clean-dist
- Generate TypeORM Schema Log: yarn app-schema-log

# Tests

Run the test suite using Jest:
```bash
yarn test
```

