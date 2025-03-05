import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { submitContactForm } from "../api";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    occupation: "",
    linkedIn: "",
    gitHub: "",
    socialMedia: "",
    reasonForContact: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await submitContactForm(formData);
      if (response.message === "Form submitted successfully") {
        setSubmitted(true);
        setTimeout(() => {
          navigate("/");
        }, 5000);
      } else {
        setError("Failed to submit form. Please try again.");
      }
    } catch (error) {
      setError("An error occurred during form submission. Please try again.");
    }
  };

  return (
    <>
      {submitted ? (
        <h3>
          Thank you for making contact. If requested, a response will be coming
          soon.
        </h3>
      ) : (
        <>
          <h2>Contact Form</h2>
          <p>
            Thanks for visiting the page, and for taking the time to fill out
            this form.
          </p>
          <section className="form">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name:</label>
                <input
                  type="text"
                  name="name"
                  className="form-control form-control-lg"
                  placeholder="Enter your name here..."
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email:</label>
                <input
                  type="email"
                  name="email"
                  className="form-control form-control-lg"
                  placeholder="youremail@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone:</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-control form-control-lg"
                  placeholder="(123) 456-7890"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Occupation:</label>
                <input
                  type="text"
                  name="occupation"
                  className="form-control form-control-lg"
                  placeholder="Your occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">LinkedIn:</label>
                <input
                  type="url"
                  name="linkedIn"
                  className="form-control form-control-lg"
                  placeholder="https://..."
                  value={formData.linkedIn}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">GitHub:</label>
                <input
                  type="url"
                  name="gitHub"
                  className="form-control form-control-lg"
                  placeholder="https://..."
                  value={formData.gitHub}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Social Media Handle/Profile:
                </label>
                <input
                  type="text"
                  name="socialMedia"
                  className="form-control form-control-lg"
                  placeholder="@handle or https://"
                  value={formData.socialMedia}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Reason for Contact:</label>
                <input
                  type="text"
                  name="reasonForContact"
                  className="form-control form-control-lg"
                  placeholder="Why are you contacting me?"
                  value={formData.reasonForContact}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Detailed Message:</label>
                <textarea
                  name="message"
                  className="form-control form-control-lg"
                  placeholder="Enter your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              {error && <div className="alert alert-danger">{error}</div>}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </section>
        </>
      )}
    </>
  );
};

export default Contact;
