import React from "react";
import Input from "../card/input";

function Contact() {
  return (
    <div>
      <form>
        <Input
          label={"Full Name"}
          type={"text"}
          placeholder={"enter Your Name"}
        />
        <Input
          label={"Email"}
          type={"email"}
          placeholder={"e.g omuetihappy@gmail.com"}
        />
        <Input
          label={"Password"}
          type={"password"}
          placeholder={"Enter a valid password"}
        />
      </form>
    </div>
  );
}

export default Contact;
