<a id="readme-top"></a>
[![Unlicense License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <p align="center">
    <a href="uchifinals.vercel.app">
      <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/b9917fe9-22ed-4dba-b26c-41c39003dbf7">
        <img src="https://github.com/user-attachments/assets/b9917fe9-22ed-4dba-b26c-41c39003dbf7" height="128">
      </picture>
    </a>
  </p>

  <h3 align="center">uchifinals</h3>

  <p align="center">
    Find your UChicago final exam schedule, fast and easy.
    <br />
    <br />
    <a href="https://uchifinals.vercel.app">Use uchifinals here</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About uchifinals</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

<img width="1710" alt="uchifinals screenshot" src="https://github.com/user-attachments/assets/b710fb07-aa04-4b04-a160-ed9ce06ef5dc" />

uchifinals modernizes how UChicago students access their final exam schedules. Instead of wrestling with hard-to-read Excel sheets from the Registrar, students can quickly find their exam times through an intuitive web interface.

Key Features:
* **Smart Search System**: Find your exams by course name, instructor, or exam date
* **Calendar Integration**: Export exam schedules directly to Google/Apple Calendar
* **Mobile-Friendly Design**: Access your schedule on any device
* **Real-Time Updates**: Always displays the latest exam schedule information

### Built With

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![Tailwind][Tailwind-shield]][Tailwind-url]
* [![PostgreSQL][PostgreSQL-shield]][PostgreSQL-url]
* [![Docker][Docker-shield]][Docker-url]

<!-- GETTING STARTED -->
## Getting Started

To set up uchifinals locally for development, follow these steps:

### Prerequisites

* Node.js (18.x or higher)
* Docker
* npm
  ```sh
  npm install npm@latest -g
  ```
* PostgreSQL (if running without Docker)

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/your_username/uchifinals.git
   ```

2. Install NPM packages
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   DATABASE_URL=postgresql://user:password@localhost:5432/uchifinals
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

4. Start the PostgreSQL database using Docker
   ```sh
   docker-compose up -d
   ```

5. Run the development server
   ```sh
   npm run dev
   ```

## Usage

1. **Search for Exams**
   * Enter course name, instructor, or date in the search bar
   * Results update in real-time as you type

2. **View Exam Details**
   * Click on a course to see full exam information
   * View location, time, and special instructions

3. **Export to Calendar**
   * Select the exam(s) you want to add
   * Click the calendar icon to export
   * Choose between Google Calendar or Apple Calendar

## Roadmap

- [x] Basic search functionality
- [x] Calendar export feature
- [ ] Multiple quarter support
- [ ] User accounts for saving preferences
- [ ] Mobile app version
- [ ] API for third-party integrations

## License

Distributed under the Unlicense License. See `LICENSE.txt` for more information.

## Contact

Esslam Ashour - [@your_twitter](https://twitter.com/your_username) - your.email@uchicago.edu

Project Link: [https://github.com/your_username/uchifinals](https://github.com/your_username/uchifinals)

<!-- MARKDOWN LINKS & IMAGES -->
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/esslam-ashour
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Tailwind-shield]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[PostgreSQL-shield]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/
[Docker-shield]: https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/
