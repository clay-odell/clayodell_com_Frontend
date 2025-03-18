import { useState } from "react";
const Projects = () => {
  return (
    <>
      <h2>RELEVANT PROJECTS</h2>
      <ul>
        <li>
          <strong>Gig Match Calendar App</strong>
        </li>
        <p>
          This is my capstone project from Auburn's Software Engineering
          Bootcamp
        </p>
        <ul>
          <li>
            <a href="https://gigmatch-frontend-calendar-app.onrender.com/">
              Application
            </a>
          </li>
          <li>
            <a href="https://github.com/clay-odell/GigMatch_Frontend_Calendar_App">
              Frontend Code Base
            </a>
          </li>
          <li>
            <a href="https://github.com/clay-odell/GigMatch_Backend">Backend</a>
          </li>
        </ul>
        <li>
          <br />
          <strong>Dutch Bros Shift Checklist App</strong>
        </li>
        <p>
          This app is a "clicker" that assist a shift lead in their given shift
          duties. It solves the problem of not having to go to a posted checklist to accomplish shift tasks.
        </p>
        <ul>
          <li>
            <a href="https://clay-odell.github.io/dutchbrosChecklist/">
              Application
            </a>
          </li>
          <li>
            <a href="https://github.com/clay-odell/dutchbrosChecklist">
              Code Base
            </a>
          </li>
        </ul>
      </ul>
    </>
  );
};
export default Projects;
