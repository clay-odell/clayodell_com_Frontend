import "./styles/CV.css";
import "bootstrap/dist/css/bootstrap.css";
const CV = ({ role }) => {
  return (
    <>
      <h2>Summary</h2>
      <p className="justified">
        {role} skilled in creative problem solving, with a background in English
        Education, high quality customer service, and music production and
        performance. Avid about lifelong learning and applying knowledge of best
        practices in web development. Recently completed Auburn University's
        Software Engineering Bootcamp. Looking for challenging roles to apply
        and broaden my knowledge base
      </p>
      <section className="education">
        <h2>Education</h2>
        <ul className="education-li">
          <li>
            <strong>
              Auburn University's Office of Professional and Continuing
              Education{" "}
            </strong>{" "}
            — Software Engineering Bootcamp (January Cohort, 2024)
          </li>
          <li>
            <strong>Columbus State University</strong> — Master of Secondary
            English Education (2007 -2009) — 4.0 GPA
          </li>
          <li>
            <strong>The University of Alabama</strong> — Bachelor of Arts in
            English (1999-2003) — 3.27 GPA
          </li>
        </ul>
      </section>
      <section className="work-experience" id="work-experience">
        <h2>Experience</h2>
        <div className="container">
          <h3>Dutch Bros Coffee, Huntsville, AL</h3>
          <p className="centeredParagraphs">
            Shift Lead/"Broista" for a high volume, speed-driven coffee company.
            (2024-Present)
          </p>
          <ul>
            <li>
              Led shifts in a fast-paced, customer-facing environment focused on
              delivering the highest customer service.
            </li>
            <li>
              Ensured speed, quality, and service were maintained by all team
              members to provide exceptional customer experiences.
            </li>
            <li>
              Coordinated with team members to manage daily operations
              effectively and efficiently.
            </li>
            <li>
              Addressed customer issues and resolved them promptly to ensure
              customer satisfaction.
            </li>
          </ul>
        </div>
        <hr />
        <div className="container">
          <h3>Mazda Toyota Manufacturing, Huntsville, AL</h3>
          <p>
            Team Member on the Final II assembly line at the largest automotive
            manufacturing facility in the United States. (March 2023-November
            2023)
          </p>
          <ul>
            <li>
              Learned and maintain skills for certification in four different
              processes
            </li>
            <li>
              Maintained quality and efficiency in an extremely fast-paced work
              environment with a monthly rotating schedule.
            </li>
            <li>
              Focused on continuous improvement submitting "Kaizen" forms for
              multiple improvement suggestions.
            </li>
          </ul>
        </div>
        <hr />
        <div className="container">
          <h3>Costco Wholesale, Huntsville, AL</h3>
          <p className="centeredParagraphs">
            Frontend Assistant for international wholesale member club.
          </p>
          <ul>
            <li>
              Assisted cashiers and club members with checking out, emptying and
              refilling their carts
            </li>
            <li>
              Responsible for the return of shopping carts to the front entrance
              from the parking lot and shopping cart corrals
            </li>
            <li>
              Responsible for providing exceptional customer service, and food
              quality in the food court.
            </li>
            <li>
              Maintained kitchen area, cleaning machines, coutertops, and
              preparing pizza boxes for sales the following day.
            </li>
          </ul>
        </div>
        <hr />
        <div className="container">
          <h3>Ignatius J. Productions, Huntsville, AL</h3>
          <p className="centeredParagraphs">
            Owner/Operator of a regional musical performance and sound
            production company. (2014-Present)
          </p>
          <ul>
            <li>
              Created engaging multimedia digital content for local music acts
              Dr. Whateva, Sturgill's Turtles, The Grassring, and others using
              social media platform tools, Adobe's Creative Suite, iMovie, and
              GarageBand.
            </li>
            <li>
              Analyzed audience engagement to determine best practices, minimize
              time sinking, and maximize audience engagment.
            </li>
            <li>
              Developed, maintained, and expanded relationships with venue
              owners, audiences, and other artists in order to staty current and
              relevant across multiple decades in a dynamic and constantly
              growing industry.
            </li>
            <li>
              Wrote, recorded, and co-produced three albums with the band The
              Grassring
            </li>
            <li>
              Provided comprehensive sound engineering services at a regional
              music festival in Tennessee for three consecutive years.
              Responsibilities included the setup and managment of audio
              equipment, microphones, speakers, cables and stands.
            </li>
          </ul>
        </div>
        <hr />
        <div className="container">
          <h3>Columbia High School, Huntsville City Schools</h3>
          <p className="centeredParagraphs">
            High School English Language Arts Instructor. (2013-2014)
          </p>
          <ul>
            <li>
              Utilized immerging technologies to create engaging curriculum for
              9th and 12th grade Literature and Composition courses.
            </li>
            <li>
              Diligently researched and applied best practices, focusing on
              continuous improvement personally and for students.
            </li>
          </ul>
        </div>
        <hr />
        <div className="container">
          <h3>Calhoun Community College, Huntsville Campus</h3>
          <p className="centeredParagraphs">
            Adjunct English Professer at a regional community college.
            (2010-2013)
          </p>
          <ul>
            <li>
              Designed classroom content and curriculum for remedial English
              courses at the post-secondary level.
            </li>
            <li>
              Utilized cutting edge technologies through EdX to assist with
              developing new and better methods of grading essays, assigning
              meaningful work, and helping students overcome challenges.
            </li>
            <li>
              Researched and assesed each implemented technique and method in an
              effort of continuous improvement.
            </li>
            <li>
              Developed engaging lesson plans for students with various levels
              of skill and learning styles.
            </li>
            <li>
              Created assessments for assignments that allowed students
              demonstrate deep understanding, and to help redirect intruction
              towards the areas where students demonstrated a need for
              improvement
            </li>
          </ul>
        </div>
        <hr />
        <div className="harris">
          <h3>
            Harris County High School, Harris County Board of Education,
            Hamilton, GA
          </h3>
          <p className="centeredParagraphs">
            English Language Arts Instructor at a rural secondary school.
            (2003-2009)
          </p>
          <ul>
            <li>
              Responsible for classroom management, student engagement, and
              instruction in 11<sup>th</sup> grade American Literature &amp;
              Composition and 9<sup>th</sup> grade Literature &amp; Composition
            </li>
            <li>
              Extensive knowledge of time management skills, utilizing various
              technologies and techniques to keep classes of 35+ students on
              task, engaged, and ready for daily assessments and annual End of
              Course Tests.
            </li>
            <li>
              Coached wrestling, placing one champion and one runner-up at the
              annual state tournament, as well as producing dozens of qualifiers
              over the course of 6 seasons.
            </li>
            <li>
              Worked efficiently in both team environments and as an individual
              educator, regularly meeting with teachers, parents, and
              administrators to insure data-based instructional teaching methods
              were implemented in my classroom, and the school at-large.
            </li>
          </ul>
        </div>
      </section>
      <section className="technologies">
        <h2>Technologies</h2>
        <div className="container">
          <h3>Web Development</h3>
          <ul className="technologies">
            <li>HTML &amp; CSS</li>
            <li>JavaScript</li>
            <li>DOM Manipulation using vanilla JavaScript &amp; JQuery</li>
            <li>Node.js &amp; Express</li>
            <li>Python &amp; Flask</li>
            <li>React.js</li>
          </ul>
        </div>
        <hr />
        <div className="container">
          <h3>Database</h3>
          <ul>
            <li>SQL</li>
            <li>PostgreSQL</li>
            <li>Node-pg & SQLAlchemy</li>
          </ul>
        </div>
        <hr />
        <div className="container">
          <h3>Testing</h3>
          <ul>
            <li>AI Prompt Engineering</li>
            <li>Command Line</li>
            <li>Git & GitHub</li>
            <li>Object-Oriented Programming</li>
            <li>Data Structures</li>
            <li>Algorithms</li>
          </ul>
        </div>
        <hr />
      </section>
      <section className="tools">
        <div className="container">
          <table>
            <thead>
              <tr>
                <th>Tool</th>
                <th>Description</th>
                <th>Proficiency</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <abbr title="Visual Studio Code">VS Code</abbr>
                </td>
                <td>A free source-code editor made by Microsoft.</td>
                <td>Expert</td>
              </tr>
              <tr>
                <td>PyCharm</td>
                <td>
                  <abbr title="Integrated Development Environment">IDE</abbr>{" "}
                  used for Python programming.
                </td>
                <td>Intermediate</td>
              </tr>
              <tr>
                <td>Postman</td>
                <td>
                  Collaborative platform for
                  <abbr title="application programming interface">
                    API
                  </abbr>{" "}
                  development.
                </td>
                <td>Advanced</td>
              </tr>
              <tr>
                <td>Adobe Express</td>
                <td>
                  A cloud-based tool for creating graphics, videos, webpages,
                  and digital content.
                </td>
                <td>Expert</td>
              </tr>
              <tr>
                <td>Slack</td>
                <td>
                  Collaboration hub for work with channels, messaging, and file
                  sharing.
                </td>
                <td>Advanced</td>
              </tr>
              <tr>
                <td>GitBash</td>
                <td>
                  A Windows-based{" "}
                  <abbr title="command line interface">CLI</abbr> that provides
                  Bash emulation to run Git commands.
                </td>
                <td>Advanced</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="project">
        <h2>Capstone Project</h2>
        <div className="container">
          <h3>GigMatch Calendar App</h3>
          <a href="https://gigmatch-frontend-calendar-app.onrender.com">
            Fully Deployed Application
          </a>{" "}
          <br />
          <a href="https://github.com/clay-odell/GigMatch_Frontend_Calendar_App">
            Frontend
          </a>{" "}
          <br />
          <a href="https://github.com/clay-odell/GigMatch_Backend">
            Backend
          </a>{" "}
          <br />
          <p className="centeredParagraphs">
            Demonstrates knowledge and grasp of fullstack software applications
            and development
          </p>
          <ul>
            <li>
              Designed and built a calendar application that allows venues and
              artists to share a common calendar.
            </li>
            <li>Implemented authentication for signing up and signing in.</li>
            <li>
              Developed functionalities for requesting, approving and rejecting
              event requests.
            </li>
            <li>
              Utilized React.js, Bootstrap for React, and Node.js for
              implementation.
            </li>
          </ul>
          <p className="centeredParagraphs">
            Further Study: considering adding automation to help with
            administrative users and artist users to respond to events.
          </p>
        </div>
      </section>
    </>
  );
};
export default CV;
