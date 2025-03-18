import { useState } from "react";
import CV from "./CV";
import Resume from "./Resume";
import 'bootstrap/dist/css/bootstrap.css';
const Experience = () => {
  const [CV, setCV] = useState("");
  const [role, setRole] = useState("");
  const [isRoleVisible, setIsRoleVisible] = useState(false);

  const capitalizeFirstLetter = (string) => {
    return string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  const capitalizedRole = capitalizeFirstLetter(role);
  console.log(capitalizedRole);

  const handleResumeChange = (e) => {
    const val = e.target.value;
    setCV(val);
    setIsRoleVisible(true);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <>
      <header>
        <img src="/Clay_Logo-Face.png" height="150px" width="150px" alt="Picture of Clay O'Dell" />
        <h1>
          Clay O'Dell's <em>Curriculum Vitae</em>
        </h1>
        <div className="contact">
          <p className="centeredParagraphs">Contact Information:</p>
          <p>Phone: (706) 442-5058</p>
          <p>Huntsville, Alabama</p>
          <p>
            <a href="mailto:clayodell@clayodell.com">clayodell@clayodell.com</a>
          </p>

          <p>
            <a href="https://www.linkedin.com/in/clayodell/">
              linkedin.com/in/clayodell
            </a>
          </p>
          <p>
            <a href="https://github.com/clay-odell">github.com/clay-odell</a>
          </p>
        </div>
      </header>
      <section className="forms">
        <form>
          <label>
            <em>Curriculum Vitae</em>: <br />
            <select value={CV} onChange={handleResumeChange}>
              <option value="" disabled>
                Select...
              </option>
              <option value="cv">Curriculum Vitae</option>
            </select>
          </label>
        </form>

        {isRoleVisible && (
          <form>
            <label>
              Role: <br />
              <select value={role} onChange={handleRoleChange}>
                <option value="" disabled>
                  Select...
                </option>
                <option value="software developer">Software Developer</option>
                <option value="software engineer">Software Engineer</option>
                <option value="technical writer">Technical Writer</option>
              </select>
            </label>
          </form>
        )}
      </section>
      <br />
      {CV === "cv" && role !== "" && (
        <>
          <CV role={capitalizedRole} />
        </>
      )}
      {CV === "resume" && role !== "" && (
        <>
          <Resume role={capitalizedRole} />
        </>
      )}
    </>
  );
};

export default Experience;
