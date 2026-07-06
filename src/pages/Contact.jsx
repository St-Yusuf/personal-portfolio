import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message.";
    } else if (formData.message.length < 10) {
      newErrors.message =
        "Message must contain at least 10 characters.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
      return;
    }

    setErrors({});
    setSuccess("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact-layout">

  <div className="contact-info">

    <p className="section-tag">
      CONTACT
    </p>

    <h1>
      Let's Work Together
    </h1>

    <p>
      Feel free to contact me for collaboration,
      projects, or opportunities related to
      data science and technology.
    </p>

    <div className="contact-highlights">

      <div>
        <span>📍</span>
        Germany
      </div>

      <div>
        <span>🎓</span>
        Data Science Student
      </div>

      <div>
        <span>💡</span>
        AI & Analytics
      </div>

    </div>

  </div>

  <div className="contact-card">

        <h2>Send a Message</h2>

        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Name</label>

          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />

          {errors.name && (
            
            <span className="error" role="alert">{errors.name}</span>
          )}

          <label htmlFor="email">Email</label>

          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />

          {errors.email && (
            <span className="error" role="alert">{errors.email}</span>
          )}

          <label htmlFor="message">Message</label>

          <textarea
            id="message"
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
          />

          {errors.message && (
            <span className="error" role="alert">{errors.message}</span>
          )}

          <button type="submit">
            Send Message
          </button>

          {success && (
            <p className="success">
              {success}
            </p>
          )}
        </form>
      </div>

</section>
  );
}

export default Contact;