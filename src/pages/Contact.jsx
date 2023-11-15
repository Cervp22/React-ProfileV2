import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [surnameError, setSurnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [textError, setTextError] = useState(false);

  const nameHandler = (e) => {
    setName(e.target.value);
    setNameError(false);
  };

  const surnameHandler = (e) => {
    setSurname(e.target.value);
    setSurnameError(false);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const messageHandler = (e) => {
    setMessage(e.target.value);
    setTextError(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length <= 2) {
      setNameError(true);
    }

    if (surname.length <= 2) {
      setSurnameError(true);
    }

    if (!validateEmail(email)) {
      setEmailError(true);
    }

    if (message.length <= 100) {
      setTextError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Contact Me</h1>
      <h2 style={{ marginLeft: "170px", marginTop: "30px" }}>Name:</h2>
      <input
        type="text"
        value={name}
        required
        onChange={nameHandler}
        style={{ marginLeft: "170px" }}
      />
      {nameError ? (
        <div style={{ color: "red", marginLeft: "170px" }}>
          *Must have a valid name
        </div>
      ) : null}
      <h2 style={{ marginLeft: "170px" }}>Last:</h2>
      <input
        type="text"
        value={surname}
        required
        style={{ marginLeft: "170px" }}
        onChange={surnameHandler}
      />
      {surnameError ? (
        <div style={{ color: "red", marginLeft: "170px" }}>
          *Must have a valid name
        </div>
      ) : null}
      <h2 style={{ marginLeft: "170px" }}>Email:</h2>
      <input
        type="text"
        value={email}
        required
        style={{ marginLeft: "170px" }}
        onChange={emailHandler}
      />
      {emailError ? (
        <div style={{ color: "red", marginLeft: "170px" }}>
          *Must have a valid email requirements: @ .
        </div>
      ) : null}
      <h2 style={{ marginLeft: "170px" }}>Message:</h2>
      <textarea
        value={message}
        required
        style={{ marginLeft: "170px" }}
        onChange={messageHandler}
        cols="50"
        rows="10"
      ></textarea>
      {textError ? (
        <div style={{ color: "red", marginLeft: "170px" }}>
          *Must be at least 100 characters
        </div>
      ) : null}
      <br />
      <input type="submit" style={{ marginLeft: "330px" }} />
    </form>
  );
}
export default Contact;
