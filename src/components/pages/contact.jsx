import React from "react";
import Input from "../card/input";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    if (name && email && password) {
      alert(`my name is ${name} my email ${email}`);
      setName("");
      setEmail("");
      setPassword("");
    } else {
      alert("fill the form");
    }
  };

  return (
    <div className="bg-gray-50 w-full h-screen">
      <form
        className="mr-auto ml-auto  mt-4 shadow w-[40%] flex flex-col p-4"
        onSubmit={submitForm}
      >
        <Input
          label={"Full Name"}
          type={"text"}
          placeholder={"enter Your Name"}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          label={"Email"}
          type={"email"}
          placeholder={"e.g omuetihappy@gmail.com"}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          label={"Password"}
          type={"password"}
          placeholder={"Enter a valid password"}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="bg-blue-500 text-white" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
