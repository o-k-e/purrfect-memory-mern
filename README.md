<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a>
<img width="190" alt="cat-logo" src="https://github.com/user-attachments/assets/3908da31-a852-4bbb-bf45-c670a678c08e" />
  </a>
<h1 align="center">Purrfect Memory Game 🐾</h1>
</div>

<!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary>

- [About The Project](#about-the-project)
- [Built With](#built-with)
- [Contributors](#contributors)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation Steps](#installation-steps)
  - [Access the Application](#access-the-application)
  - [Stop the Application](#stop-the-application)
- [Usage](#usage)
- [Troubleshooting](#troubleshooting)

</details>

## About The Project

This project is a fun and interactive memory game built with **MongoDB**, **Express.js**, and **Vite + React**, styled using **Tailwind CSS**, and written entirely in **JavaScript**.  
Players flip adorable kitty cards and try to find matching pairs, aiming to complete the deck with the fewest moves possible.

### Key Highlights:
-  Randomly fetched cat images from **The Cat API** 🐱
-  Basic User authentication: login, register, and profile management
-  Scoreboard to showcase top players
-  Smooth page navigation and simple animations
-  For the best experience, make sure to play with sound enabled! 🎵

The main goal of this project was to learn and practice **MERN stack (MongoDB, Express.js, React, Node.js)** development, including routing, API calls, and integrating third-party services — all while creating an engaging and delightful user experience.

<img width="635" alt="game-page" src="https://github.com/user-attachments/assets/1915af46-f9b9-4355-8182-e0019c19ef39" />

### Built With
- Backend:   
  [![Express][Express.js]][Express-url]
  [![Node.js (v21.4.0)][Node.js]][Node.js-url]
- Database:  
  [![MongoDB][MongoDB]][MongoDB-url]
- Frontend:  
  [![React][React.js]][React-url]
  [![Vite][Vite]][Vite-url]
  ![CSS3][CSS3]
  [![JavaScript][JavaScript]][JavaScript-url]
  
### Contributors:

- **Oláhné Klár Erika**    
    [![GitHub](https://img.shields.io/badge/GitHub-%2312100E.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/o-k-e)  [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/erika-olahne-klar/)  
- **Molnár Marianna**   
    [![GitHub](https://img.shields.io/badge/GitHub-%2312100E.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/MariannaMolnar)   
- **Szatyina Alexa**  
    [![GitHub](https://img.shields.io/badge/GitHub-%2312100E.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/szatyinalexa)   
  


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Before running the project, make sure you have the following installed:

- **Node.js** (v21.4.0) – [Download here][Node.js-url]
- **MongoDB Atlas account** – [Sign up here][MongoDB-url]

---

### Installation Steps

Follow these steps to set up and run the project locally:

1. **Clone the Repository**
  Open a terminal and navigate to the directory where you would like to save the repository.
  ```bash
  https://github.com/o-k-e/purrfect-memory-mern.git
  cd purrfect-memory-mern
  ```

2. **Configure Environment Variables**

  Copy the example environment file and rename it to `.env` inside the server directory:
  
  ```bash
  cd server
  cp .env.example .env
  ```
  
  Then open the newly created `.env` file and update the values to match your own credentials:
  
  ```plaintext
  DATABASE_URL="mongodb+srv://YOUR_USERNAM:YOUR_DB_PASSWORD@cluster0.vlwvb93.mongodb.net/"
  ```

3. **Running the Project**

  Populate the MongoDB database with initial data by running seed.js:
  ```
  cd server
  node seed.js
  ```
  
  Start the backend server:
  ````
  cd server
  npm run dev
  ````
  
  Start the frontend client:
  ````
  cd client
  npm install
  npm run dev
  ````
  
  After completing the setup steps:
  
  - 🖥️ Your **frontend** will be available at:  
  🔗 [http://localhost:5173](http://localhost:5173) (default Vite port)
  
  - 🛠️ Your **backend server** will be running at:  
  🔗 [http://localhost:3000](http://localhost:3000) (default Express port)
  

4. **Access the Application**

  Open your browser and visit: http://localhost:5173

5. **Stop the Application**

  To stop the application:
  
  - In the **backend** terminal window, press `CTRL + C`.
  - In the **frontend (client)** terminal window, press `CTRL + C`.


## Usage

## Audio Experience 🎵

For the best experience, make sure to play with sound enabled!  
Each card flip and successful match comes with adorable cat sounds to make your game even more purrfect. 🐾🎶

<img width="635" alt="welcome-page" src="https://github.com/user-attachments/assets/d62faf14-d5a3-477b-91ab-cfae5c340754" />

<img width="634" alt="login" src="https://github.com/user-attachments/assets/51064c19-daf8-4b9e-8c7c-ac07c558389f" />

On the website, you can either:

- 🔑 Log in with the default user credentials:  
  **Username:** Maszatka  
  **Password:** 1234

or

- 🆕 Register a new user, then log in with your own credentials.

Once logged in:

- 🏠 Visit the homepage at [http://localhost:5173](http://localhost:5173)
- 🎴 Start a new game by clicking **Play**.
- 🔄 Match all the kitty cards as quickly and accurately as possible.
- 🏆 View the live **Scoreboard** to see the top players and your rank.
- 🙍‍♂️ Manage your profile: update your password or delete your account if you wish.

Enjoy the game and test your memory skills! 🐾✨

<img width="635" alt="game-page" src="https://github.com/user-attachments/assets/9d4ef27a-2814-4dd6-b641-f4ad61000ba7" />

<img width="637" alt="game-on" src="https://github.com/user-attachments/assets/41bb2e80-f8f4-4744-a7ef-a4dce41d88e1" />

<img width="640" alt="scoreboard" src="https://github.com/user-attachments/assets/4b9faf3b-4e7f-46d6-afc2-51038c6140a5" />

<img width="631" alt="user-profile" src="https://github.com/user-attachments/assets/e3c88995-c91f-4333-bbe0-ab777af74bf4" />


### Troubleshooting

- Port Conflicts:
  Ensure ports 3000 and 5173 are not in use by other processes.
- MongoDB Connection Issues:
  Ensure your MongoDB Atlas cluster allows connections from your IP (0.0.0.0/0 for all IPs).  
  Verify that DATABASE_URL in .env is correct.

<!-- BADGES -->

[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: https://expressjs.com/

[Node.js]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node.js-url]: https://nodejs.org/

[MongoDB]: https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/

[React.js]: https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black
[React-url]: https://reactjs.org/

[Vite]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/

[CSS3]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white

[JavaScript]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[JavaScript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[CatAPI-url]: https://thecatapi.com/

