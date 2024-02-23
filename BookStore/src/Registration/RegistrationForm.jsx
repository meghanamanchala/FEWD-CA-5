// eslint-disable-next-line no-unused-vars
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./RegistrationForm.css";

// Functional component for Registration Form
const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    watch,
  } = useForm(); // Initializing useForm hook for form management

  // Function to handle form submission
  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };

  return (
    <>
      <div className="main">
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
          {/* Container to display success message upon successful form submission */}
          <div className={`Container ${isSubmitSuccessful ? "success" : ""}`}>
            {isSubmitSuccessful && (
              <h2 className="success">Registration Successful!!!</h2>
            )}
          </div>
          <div>
            <h2>CREATE ACCOUNT</h2>
          </div>
          {/* Input field for user's name */}
          <div>
            <input
              type="text"
              placeholder="Your Name"
              {...register("firstName", {
                required: "First name required",
                minLength: {
                  value: 3,
                  message: "Name must be more than 3 characters",
                },
                maxLength: {
                  value: 30,
                  message: "Name cannot be more than 30 characters",
                },
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Invalid first name",
                },
              })}
            />
            {errors.firstName && (
              <p className="red">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Your Email"
              {...register("email", {
                required: "Email is required",
                validate: (value) => {
                  if (!value.includes("@")) {
                    return "Invalid email";
                  }
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email",
                },
              })}
            />
            {errors.email && <p className="red">{errors.email.message}</p>}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("pass", {
                required: "Enter your password",
                minLength: {
                  value: 10,
                  message: "Password must be more than 10 characters",
                },
                pattern: {
                  value: /^(?=.*[!@#$%^&])[a-zA-Z0-9!@#$%^&*]+$/,
                  message:
                    "Password must contain at least one special character",
                },
              })}
            />
            {errors.pass && <p className="red">{errors.pass.message}</p>}
          </div>
          <div>
            <input
              type="password"
              placeholder="Repeat your Password"
              {...register("repeatPass", {
                required: "Confirm Password required",
                validate: (value) =>
                  value === watch("pass") || "Passwords do not match",
              })}
            />
            {errors.repeatPass && (
              <p className="red">{errors.repeatPass.message}</p>
            )}
          </div>
          <div className="para">
            <h3>
              I agree all statements in{" "}
              <a className="anchor">Terms of service</a>
            </h3>
          </div>
         {/* Button to submit the form */}
          <div className="btn">
            <button
              disabled={isSubmitting || watch("pass") !== watch("repeatPass")}
              type="submit"
            >
              {isSubmitting ? "Loading..." : "SIGN UP"}
            </button>
          </div>
          <div className="account">
            <p>
              Have already an account ? <a className="anchor">Login here</a>
            </p>
          </div>
          {/* Link to navigate back to home */}
          <Link to={"/"}>
            <div className="text-center m-3">
              <button className="backHome">Get back to Home</button>
            </div>
          </Link>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
