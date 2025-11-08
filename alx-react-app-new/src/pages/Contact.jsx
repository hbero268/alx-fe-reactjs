import { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Contact Us</h2>

      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setMessage(e.target.value)}
        style={{ padding: "8px", width: "200px" }}
      />

      <p>You typed: {message}</p>
    </div>
  );
}

export default Contact;
