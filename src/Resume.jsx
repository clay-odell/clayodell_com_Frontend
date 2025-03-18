import Projects from "./Projects";
import "./styles/Resume.css";

const Resume = ({ role }) => {
  const renderProfessionalSummary = (role) => {
    if (role === "Software Developer") {
      return (
        <p className="justified">
          Detail-oriented {role} with a solid foundation in creating, optimizing
          and managing software baselines to ensure system integrity,
          performance and scalability. Experienced in working with
          cross-functional teams to develop robust and reliable solutions.
          Committed to continuous improvement and delivering high-quality
          software solutions.
        </p>
      );
    } else if (role === "Software Engineer") {
      return (
        <p className="justified">
          {role} with a background in education, and a solid foundation in
          creating, optimizing, and managing software baselines to ensure system
          integrity, performance, and scalability. Experienced in working with
          cross-functional teams to develop robust and reliable solutions.
          Committed to continuous improvement and delivering high-quality
          software solutions. Adept at HTML, CSS, React.js, Node.js, and
          JavaScript.
        </p>
      );
    } else {
      return (
        <p className="justified">
          {role} seeking a position, with ten years of English educational
          experience in writing, revising, editing, and proofreading at a high
          level, and knowledge of principles of software development. Driven by
          a desire to provide premier customer service, and to add value for all
          constituents, I excel in collaborative environments that emphasize
          innovation and continuous learning, where I can leverage my skills to
          contribute meaningfully to both team and individual success, while
          maintaining a strong commitment to ethical practices and community
          engagement.
        </p>
      );
    }
  };
  const renderIndustrySpecificLi = (role) => {
    if (role === "Technical Writer") {
      return (
        <li>
          <strong>Industry-Specific Skills</strong>: Technical Writing, Content
          Editing, Team-leading, Instructional Design
        </li>
      );
    }
    return null; // Return null if no specific role matches
  };

  return (
    <>
      <h2>CLAY O'DELL</h2>
      <p className="centered">
        clayodell.swe@gmail.com • (256) 294-7330 • www.linkedin.com/in/clayodell
        • github.com/clay-odell • Huntsville, Alabama
      </p>
      <h2>PROFESSIONAL SUMMARY</h2>
      {renderProfessionalSummary(role)}

      <h2>RELATED TECHNICAL SKILLS</h2>
      <ul>
        <li>
          <strong>Programming Languages</strong>: JavaScript, Python, Node.js,
          React.js, HTML5, CSS, PostgreSQL, SQL, limited knowledge of C
        </li>
        <li>
          <strong>Software Proficiency</strong>: VS Code, Microsoft Office Suite
          (Word, Excel, PowerPoint, Outlook)
        </li>
        <li>
          <strong>Creative and Multimedia Tools</strong>: iMovie, GarageBand,
          Adobe Creative Suite (Photoshop, Express, Acrobat, Rush)
        </li>
        <li>
          <strong>Testing Tools</strong>: Jest
        </li>
        <li>
          <strong>Software Engineering Methods</strong>: Full stack development,
          Object Oriented Programming, Agile, AI, CI/CD, UI/UX
        </li>
        <li>
          <strong>Security Clearance</strong>: Ability to obtain and maintain
          Secret Security Clearance
        </li>
        {renderIndustrySpecificLi(role)}
      </ul>

      <Projects />
      <h2>PROFESSIONAL EXPERIENCE</h2>
      <div className="container">
        <h3>Dutch Bros Coffee, Huntsville, AL</h3>
        <strong>
          <p className="centeredParagraphs">
            Shift Lead/"Broista" for a high volume, speed-driven coffee company.
            (2024-Present)
          </p>
        </strong>
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
            Coordinated with team members to manage daily operations effectively
            and efficiently.
          </li>
          <li>
            Addressed customer issues and resolved them promptly to ensure
            customer satisfaction.
          </li>
        </ul>
      </div>
      <hr />
      <div className="container">
        <h3>Ignatius J. Productions, Huntsville, AL</h3>
        <strong>
          <strong>
            {" "}
            <p className="centeredParagraphs">
              Owner/Operator of a regional musical performance and sound
              production company. (2014-Present)
            </p>
          </strong>
        </strong>
        <ul>
          <li>
            Created engaging multimedia digital content for local music acts Dr.
            Whateva, Sturgill's Turtles, The Grassring, and others using social
            media platform tools, Adobe's Creative Suite, iMovie, and
            GarageBand.
          </li>
          <li>
            Analyzed audience engagement to determine best practices, minimize
            time sinking, and maximize audience engagment.
          </li>
          <li>
            Developed, maintained, and expanded relationships with venue owners,
            audiences, and other artists in order to staty current and relevant
            across multiple decades in a dynamic and constantly growing
            industry.
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
        <strong>
          <p className="centeredParagraphs">
            High School English Language Arts Instructor. (2013-2014)
          </p>
        </strong>
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
        <strong>
          <p className="centeredParagraphs">
            Adjunct English Professer at a regional community college.
            (2010-2013)
          </p>
        </strong>
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
            Developed engaging lesson plans for students with various levels of
            skill and learning styles.
          </li>
          <li>
            Created assessments for assignments that allowed students
            demonstrate deep understanding, and to help redirect intruction
            towards the areas where students demonstrated a need for improvement
          </li>
        </ul>
      </div>
      <hr />
      <div className="harris">
        <h3>
          Harris County High School, Harris County Board of Education, Hamilton,
          GA
        </h3>
        <strong>
          {" "}
          <p className="centeredParagraphs">
            English Language Arts Instructor at a rural secondary school.
            (2003-2009)
          </p>
        </strong>
        <ul>
          <li>
            Responsible for classroom management, student engagement, and
            instruction in 11<sup>th</sup> grade American Literature &amp;
            Composition and 9<sup>th</sup> grade Literature &amp; Composition
          </li>
          <li>
            Extensive knowledge of time management skills, utilizing various
            technologies and techniques to keep classes of 35+ students on task,
            engaged, and ready for daily assessments and annual End of Course
            Tests.
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
      <div className="education">
        <h2>EDUCATION</h2>
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
      </div>
      </>
  );
};
export default Resume;
