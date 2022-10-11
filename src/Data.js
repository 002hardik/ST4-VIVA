// import { useForm, ValidationError } from "@formspree/react";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Form = () => {
  
  const [states, setState] = useState(JSON.parse(localStorage.getItem("data")));
  const handleSubmit = () => {};
  const Comp = ({ fullName, email, number, message }) => {
    return (
      <div className="bg-primary">
        <div className="my-5">
          <h1 className="text"> Thanks for submitting</h1>
        </div>
        <div className="container contact-div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="fullname" className="form-label">
                    FullName
                  </label>
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="fullname"
                    placeholder="Enter your name"
                    value={fullName}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="number" className="form-label">
                    Phone{" "}
                  </label>
                  <input
                    disabled
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="number"
                    placeholder="mobile number"
                    value={number}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    disabled
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="email"
                    placeholder="name@example.com"
                    value={email}
                  />
                  {/* <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                /> */}
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="message"
                    rows="3"
                    name="message"
                    value={message}
                    disabled
                  ></textarea>
                  {/* <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                /> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      {states &&
        states.map((state) => (
          <Comp
            fullName={state.fullName}
            email={state.email}
            number={state.number}
            message={state.message}
          />
        ))}
    </>
  );
};
export default Form;
