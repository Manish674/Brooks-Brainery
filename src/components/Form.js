import React, { useState } from "react";

const Form = () => {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [err, setErr] = useState("");

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = values;
    if (!email || !email.includes("@")) {
      setErr("Invalid E-mail");
      return false;
    }

    const res = await fetch("http://localhost:9991/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name: name,
        Email: email,
        Message: message,
      }),
    });
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="mx-auto mt-20 border-2 lg:w-4/5 lg:py-12"
    >
      <h1 className="mb-12 text-6xl font-bold lg:w-4/5 lg:mx-auto">
        Contact us
      </h1>
      <div className="flex flex-col w-4/5 mx-auto lg:space-x-4 lg:flex-row lg:justify-around ">
        <div className="mb-4 lg:w-2/4 lg:my-auto">
          <input
            name="name"
            placeholder="Name"
            className="w-full p-4 mb-4 bg-black border"
            value={values.name}
            onChange={(e) => handleOnChange(e)}
          />
          <input
            name="email"
            placeholder="E-mail"
            className="w-full p-4 bg-black border"
            value={values.email}
            onChange={(e) => handleOnChange(e)}
          />
          {err}
        </div>
        <textarea
          className="p-8 bg-black border lg:w-2/4 "
          name="message"
          placeholder="message"
          value={values.message}
          onChange={(e) => handleOnChange(e)}
        ></textarea>
      </div>
      <div className="flex w-4/5 mx-auto mt-4 lg:justify-end ">
        <button
          type="submit"
          className="w-full h-12 hover:bg-blue-400 duration-200 bg-redi lg:w-36"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
