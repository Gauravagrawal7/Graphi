import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./LoginForm.css";
import grafhi from "../assets/grafhi.svg";
import BackgroundDesign from "../components/BackgroundDesign";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),

  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Must include at least one uppercase letter")
    .matches(/[a-z]/, "Must include at least one lowercase letter")
    .matches(/[0-9]/, "Must include at least one number")
    .matches(/[@$!%*?&]/, "Must include at least one special character")
    .required("Password is required"),
});

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="login-container">
      <div className="left-section">
        <BackgroundDesign />
      </div>

      <div className="right-section">
        <div className="login-box">
          <div className="logo-container">
            <img src={grafhi} alt="Graphic" className="login-graphic" />
          </div>

          <h2 className="login-title">Welcome Back</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                {...register("email")}
                placeholder="example@email.com"
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                {...register("password")}
                placeholder="8+ strong characters"
              />
              {errors.password && (
                <p className="error">{errors.password.message}</p>
              )}
            </div>

            <a href="/forgot-password" className="forgot-password">
              I forgot my password
            </a>

            <button type="submit" className="submit-btn">
              Sign In
              <svg
                className="arrow-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6"></path>
              </svg>
            </button>
          </form>

          <div className="divider">
            <span className="line"></span>
            <span className="text">Or sign in with</span>
            <span className="line"></span>
          </div>

          <div className="social-login">
            <div className="social-btn">
              <div></div>
            </div>
            <div className="social-btn">
              <div></div>
            </div>
            <div className="social-btn">
              <div></div>
            </div>
          </div>

          <p className="signup-text">
            Don’t have an account?{" "}
            <a href="/signup" className="signup-link">
              Sign Up
            </a>
          </p>

          <p className="copyright">©Copyright Upgrahfi 2022</p>
        </div>
      </div>
    </div>
  );
}
