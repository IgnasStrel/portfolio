import { useState } from "react";
import "./Contact.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    //1-tikrinti laukus
    if (name.length < 3) {
      alert("Name cant be blank!");
      return;
    }
    if (email === "") {
      alert("Email cant be blank!");
      return;
    }

    if (message.length < 5) {
      alert("Message cant be blank!");
      return;
    }
    //2-siusti i firestore data
    try {
      const docRef = await addDoc(collection(db, "clientsReq"), {
        name: name,
        email: email,
        client_message: message,
        created: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="contact-title">Contact Me</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
