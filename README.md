# Tagger (Backend)

Welcome to the backend repository of the Tagger project.\
A live demo is deployed at [qr-tagger-be.onrender.com](https://qr-tagger-be.onrender.com).

## Table of Contents
- [Problem Statement](#problem-statement)
- [Solution](#solution)
- [Technology Used](#technology-used)
- [Installation Guide](#installation-guide)
- [Project Structure](#project-structure)
- [License](#license)

### Problem Statement
Once, I double-parked my car to run an errand. It took a lot of time to complete my errand. When I returned, I realized that my car was blocking a stranger's car due to the double parking. Unfortunately, he was in a hurry and became upset because of the blockage. I wondered if there could have been a way for them to contact me. \
<small>[Back to Table of Contents](#table-of-contents)</small>

### Solution
In order for them to contact me, he would need some contact details. However, putting personal contact information on the car isn't a great idea. That's when I thought of Tagger. It's a unique QR code that serves as a point of contact between the creator of the tag and the person scanning the tag. \
<small>[Back to Table of Contents](#table-of-contents)</small>

### Technology Used
- This section covers the backend of the project.
- It utilizes the Node.js runtime.
- Express is used for the API.
- PostgreSQL is the chosen database.
- Sequelize serves as the ORM.

<small>[Back to Table of Contents](#table-of-contents)</small>

### Installation Guide
To set up the project locally, follow these steps:
1. Install Node.js v18.
2. Install npm v9.
3. Either install PostgreSQL locally or connect to a remote database using a connection string.
4. Create a `.env` file based on the `.env-template` and fill it with valid credentials.
5. Run `npm i` to install all required dependency packages.
6. Navigate to the `database` folder and run `npx run db:migrate` to migrate all models.
7. From the project root, run `node server.js` to start the project.

<small>[Back to Table of Contents](#table-of-contents)</small>

### License
This project is published under the ISC license.

<small>[Back to Table of Contents](#table-of-contents)</small>
