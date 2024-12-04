
import "./contact.css"

export default function Contact(){
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h1 className="contact-title">
          Connect with <span className="highlight">Me!</span>
        </h1>
        <p className="contact-description">
          Id love to hear from you! Whether you have a question about my projects, want to collaborate on a new venture, or simply want to connect, feel free to reach out. I’m always open to new opportunities and would be thrilled to discuss how I can contribute to your next project.
        </p>
        <form action="#" className="contact-form">
          <div>
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              id="email"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              placeholder="Just saying hi!"
              required
            />
          </div>
          <div>
            <label htmlFor="message">Your message</label>
            <textarea
              id="message"
              placeholder="Leave a comment..."
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};
