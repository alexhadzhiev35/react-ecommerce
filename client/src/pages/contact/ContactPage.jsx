// import { useState } from "react";

// import {
//   APIProvider,
//   Map,
//   AdvancedMarker,
//   Pin,
//   InfoWindow,
// } from "@vis.gl/react-google-maps";
// import "./ContactPage.css";

// const ContactPage = () => {
//   const position = { lat: 42.6825024, lng: 23.3167872 };
//   const [open, setOpen] = useState(false);

//   return (
//     <APIProvider apiKey={import.meta.env.VITE_API_KEY}>
//       <div className="google-map">
//         <Map
//           zoom={14}
//           center={position}
//           mapId={import.meta.env.VITE_MAP_ID}
//         ></Map>
//         <AdvancedMarker
//           position={position}
//           onClick={() => setOpen(true)}
//         ></AdvancedMarker>
//         {open && (
//           <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
//             <p>
//               Here is our office and all the tech you need just one floor down
//             </p>
//           </InfoWindow>
//         )}
//       </div>
//     </APIProvider>
//   );
// };

// export default ContactPage;

import { useState } from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the form data to your backend server
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>
        We’d love to hear from you! Whether you have a question about our
        products, need assistance, or just want to give feedback, feel free to
        reach out to us using the form below or the contact details provided.
      </p>

      {submitted ? (
        <div className="thank-you-message">
          <h2>Thank You!</h2>
          <p>
            Your message has been sent successfully. We will get back to you as
            soon as possible.
          </p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              placeholder="Subject of your message"
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              placeholder="Write your message here"
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      )}

      <div className="contact-info">
        <h2>Our Contact Information</h2>
        <p>If you prefer to reach us directly, you can contact us at:</p>
        <p>
          <strong>Email:</strong> support@trendytech.com
        </p>
        <p>
          <strong>Phone:</strong> +1 (800) 123-4567
        </p>
        <p>
          <strong>Address:</strong> 123 Tech Street, Innovation City, Techland
        </p>
        <p>Our support team is available Monday to Friday, 9 AM to 5 PM.</p>
      </div>
    </div>
  );
};

export default ContactPage;
