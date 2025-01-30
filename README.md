<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/esslam-ashour/uchifinals">
    <img width="300" alt="image" src="https://github.com/user-attachments/assets/28662cb5-da7f-4cf2-9a0f-619ff3b7b9c6" />

  </a>
<h3 align="center">uchifinals</h3>
  <p align="center">
    find your uchicago final exam times
    <br />
    <br />
    <a href="https://uchifinals.vercel.app">try it here</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

Final exams are a critical part of a student’s academic journey, but the process of retrieving and organizing final exam schedules can be time-consuming and prone to errors. At the University of Chicago, the registrar releases an Excel sheet each quarter that contains the final exam schedule for all College courses. This format, while comprehensive, is inconvenient, difficult to navigate, and prone to human error.

To address this issue, I developed uchifinals—a streamlined, user-friendly web tool that simplifies the process of searching for and managing final exam schedules. By transforming a complex Excel sheet into an intuitive digital interface, uchifinals helps students quickly access relevant exam information, reducing frustration and maximizing productivity.

Key Features
- 🔍 Powerful Search Functionality: Students can easily search for their final exams by class code, course name, or instructor. This feature significantly reduces the time spent searching through large datasets and helps students find their exam details more efficiently.

- 📅 Seamless Calendar Integration: With just a few clicks, students can export their final exam dates directly to Google or Apple calendars. This feature ensures that students can manage their time effectively, avoiding scheduling conflicts and staying organized.

- 📊 Data Accessibility and Usability: I transformed the registrar’s traditional Excel sheet into a more accessible, user-friendly interface. This not only makes the exam schedule easier to navigate, but also ensures that students can quickly retrieve accurate information without confusion.

- ✅ Error Reduction: By automating the process of searching and exporting exam schedules, uchifinals minimizes the risk of human error when interpreting or copying data from Excel files. This ensures that students have reliable, accurate exam information.



<img width="1710" alt="image" src="https://github.com/user-attachments/assets/be33d9b9-5fa3-4449-bf68-debfb0a0098b" />


## Built With
![React][React.js]

![Tailwind CSS][Tailwind CSS]

![Next][Next.js]

![PostgreSQL][PostgreSQL]

![Prisma][Prisma]

![Docker][Docker]

## Installation Guide

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (version 6 or higher)
- [Docker](https://www.docker.com/) (for running PostgreSQL database)

### Steps

1. **Clone the repository:**

   ```sh
   git clone https://github.com/esslam-ashour/uchifinals.git
   cd uchifinals
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Set up the PostgreSQL database:**

   Ensure Docker is running, then start the PostgreSQL container

   ```sh
   docker-compose up -d
   ```

4. **Set up environment variables:**

   Create an `.env` file in the root directory and add the following:

   ```
   POSTGRES_URL=postgresql://postgres@localhost:5432/dev
   ```

5. **Run database migrations:**

   ```sh
   npx prisma migrate deploy
   ```

6. Generate prisma client

   ```sh
   npx prisma generate
   ```

7. Start the development server

   ```sh
   npm run dev
   ```

uchifinals should now be running on http://localhost:3000.

<!-- CONTRIBUTING -->
## Contributing

If you have a suggestion that would make uchifinals better, please fork the repo and create a pull request. You can also open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks!

1. Fork the repository
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT license. See `LICENSE.txt` for more information.

<!-- CONTACT -->
## Contact

Esslam Ashour - esslamashour@uchicago.edu

[Linkedin](https://www.linkedin.com/in/esslam-ashour)

[Website](https://www.esslam-ashour.com)

Project Link: [https://github.com/esslam-ashour/uchifinals](https://github.com/esslam-ashour/uchifinals)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[PostgreSQL]: https://img.shields.io/badge/postgresql-4169e1?style=for-the-badge&logo=postgresql&logoColor=white
[Docker]: https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white&style=for-the-badge
[Prisma]: https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white
[Tailwind CSS]: https://img.shields.io/badge/Tailwind_CSS-grey?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC

