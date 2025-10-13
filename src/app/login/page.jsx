"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft } from "react-icons/fa";

const AuthFlow = () => {
  const [currentPage, setCurrentPage] = useState("login"); // login, register, forgot-password, otp
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    otp: "",
    password: "",
    confirmPassword: "",
  });
  const [timer, setTimer] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    switch (currentPage) {
      case "login":
        console.log("Login Data:", {
          email: formData.email,
          password: formData.password,
        });
        break;
      case "register":
        console.log("Register Data:", formData);
        // After registration, move to OTP verification
        setCurrentPage("otp");
        startTimer();
        break;
      case "forgot-password":
        console.log("Forgot Password Email:", formData.email);
        // Send OTP for password reset
        setCurrentPage("otp");
        startTimer();
        break;
      case "otp":
        console.log("OTP Verification:", formData.otp);
        if (timer > 0) {
          // Verify OTP logic here
          alert("OTP verified successfully!");
          setCurrentPage("login");
        }
        break;
      default:
        break;
    }
  };

  const startTimer = () => {
    setTimer(59);
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const resendOTP = () => {
    if (timer === 0) {
      startTimer();
      console.log("OTP resent to:", formData.email);
    }
  };

  const LeftSection = () => (
    <div className="md:w-1/2 flex flex-col justify-center p-10 relative text-gray-700">
      <Image
        src="/images/roundimage.png"
        alt="Zodiac Wheel"
        width={600}
        height={600}
        className="absolute inset-0 w-full h-full object-contain opacity-10"
      />
      <div className="relative z-10">
        <Image
          src="/logo.png"
          alt="Logo"
          width={80}
          height={80}
          className="mb-6"
        />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
          One tool for your <br /> whole team needs
        </h1>
        <p className="text-gray-600 text-sm sm:text-base mb-8">
          We are lorem ipsum team dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            <div className="w-10 h-10 bg-purple-400 rounded-full border-2 border-white"></div>
            <div className="w-10 h-10 bg-blue-400 rounded-full border-2 border-white"></div>
            <div className="w-10 h-10 bg-green-400 rounded-full border-2 border-white"></div>
          </div>
          <span className="text-gray-700 font-medium text-sm sm:text-base">
            3k+ people joined us, now it's your turn
          </span>
        </div>
      </div>
    </div>
  );

  const LoginPage = () => (
    <>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
        Sign in
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-400 outline-none"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-400 outline-none"
          required
        />

        <span
          onClick={() => setCurrentPage("forgot-password")}
          className="text-right text-sm text-purple-600 hover:underline cursor-pointer"
        >
          Forgot password?
        </span>

        <button
          type="submit"
          className="mt-2 bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900 transition-all font-medium"
        >
          Sign In
        </button>
      </form>

      <div className="my-5 flex items-center">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="px-3 text-gray-500 text-sm">or</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      <div className="flex justify-center gap-4">
        <button className="flex items-center justify-center gap-2 border border-gray-300 px-4 py-3 rounded-lg bg-white hover:bg-gray-100 transition w-full max-w-[150px]">
          <FcGoogle size={22} />
          <span className="text-sm font-medium text-gray-700">Google</span>
        </button>
        <button className="flex items-center justify-center gap-2 border border-gray-300 px-4 py-3 rounded-lg bg-white hover:bg-gray-100 transition w-full max-w-[150px]">
          <FaMicrosoft size={20} color="#0078D4" />
          <span className="text-sm font-medium text-gray-700">Microsoft</span>
        </button>
      </div>

      <p className="text-center text-gray-600 mt-6 text-sm">
        Don't have an account?{" "}
        <span
          onClick={() => setCurrentPage("register")}
          className="text-purple-700 font-medium cursor-pointer hover:underline"
        >
          Register for free
        </span>
      </p>
    </>
  );

  const RegisterPage = () => (
    <>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
        Create an account
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-400 outline-none"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-400 outline-none"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-400 outline-none"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-400 outline-none"
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-400 outline-none"
          required
        />

        <button
          type="submit"
          className="mt-2 bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900 transition-all font-medium"
        >
          Register
        </button>
      </form>

      <div className="my-5 flex items-center">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="px-3 text-gray-500 text-sm">or</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      <div className="flex justify-center gap-4">
        <button className="flex items-center justify-center gap-2 border border-gray-300 px-4 py-3 rounded-lg bg-white hover:bg-gray-100 transition w-full max-w-[150px]">
          <FcGoogle size={22} />
          <span className="text-sm font-medium text-gray-700">Google</span>
        </button>
        <button className="flex items-center justify-center gap-2 border border-gray-300 px-4 py-3 rounded-lg bg-white hover:bg-gray-100 transition w-full max-w-[150px]">
          <FaMicrosoft size={20} color="#0078D4" />
          <span className="text-sm font-medium text-gray-700">Microsoft</span>
        </button>
      </div>

      <p className="text-center text-gray-600 mt-6 text-sm">
        Already have an account?{" "}
        <span
          onClick={() => setCurrentPage("login")}
          className="text-purple-700 font-medium cursor-pointer hover:underline"
        >
          Login here
        </span>
      </p>
    </>
  );

  const ForgotPasswordPage = () => (
    <>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 text-center">
        Forgot Password
      </h2>
      <p className="text-gray-600 text-center mb-6">
        Enter your email to reset your password
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-400 outline-none"
          required
        />

        <button
          type="submit"
          className="mt-2 bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900 transition-all font-medium"
        >
          Send Reset Code
        </button>
      </form>

      <p className="text-center text-gray-600 mt-6 text-sm">
        Remember your password?{" "}
        <span
          onClick={() => setCurrentPage("login")}
          className="text-purple-700 font-medium cursor-pointer hover:underline"
        >
          Back to login
        </span>
      </p>
    </>
  );

  const OTPPage = () => (
    <>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 text-center">
        Verify OTP
      </h2>
      <p className="text-gray-600 text-center mb-6">
        Enter the OTP sent to your email
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex justify-center gap-2 mb-4">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              name="otp"
              className="w-12 h-12 border border-gray-300 rounded-lg text-center text-xl font-semibold focus:ring-2 focus:ring-purple-400 outline-none"
              onChange={(e) => {
                const value = e.target.value;
                if (value) {
                  const nextInput = e.target.nextElementSibling;
                  if (nextInput) nextInput.focus();
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Backspace" && !e.target.value) {
                  const prevInput = e.target.previousElementSibling;
                  if (prevInput) prevInput.focus();
                }
              }}
            />
          ))}
        </div>

        <div className="text-center mb-4">
          {timer > 0 ? (
            <span className="text-gray-600 text-sm">
              Resend OTP in <span className="font-semibold">{timer}</span>{" "}
              seconds
            </span>
          ) : (
            <span
              onClick={resendOTP}
              className="text-purple-600 text-sm hover:underline cursor-pointer"
            >
              Resend OTP
            </span>
          )}
        </div>

        <button
          type="submit"
          className="mt-2 bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900 transition-all font-medium"
          disabled={timer === 0}
        >
          Verify OTP
        </button>
      </form>

      <p className="text-center text-gray-600 mt-6 text-sm">
        <span
          onClick={() => setCurrentPage("login")}
          className="text-purple-700 font-medium cursor-pointer hover:underline"
        >
          Back to login
        </span>
      </p>
    </>
  );

  const renderRightSection = () => {
    switch (currentPage) {
      case "login":
        return <LoginPage />;
      case "register":
        return <RegisterPage />;
      case "forgot-password":
        return <ForgotPasswordPage />;
      case "otp":
        return <OTPPage />;
      default:
        return <LoginPage />;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E5CFF7] via-[#D3E7FA] to-[#C8F4FD] p-4">
      <div className="w-full flex flex-col md:flex-row justify-between">
        {/* LEFT SECTION */}
        <LeftSection />

        {/* RIGHT SECTION */}
        <div className="md:w-1/2 bg-white/70 p-10 flex flex-col justify-center rounded-xl transition-all duration-300">
          {renderRightSection()}

          <p className="text-center text-xs text-gray-500 mt-8">
            Protected by reCAPTCHA and subject to the{" "}
            <span className="underline cursor-pointer">Privacy Policy</span> and{" "}
            <span className="underline cursor-pointer">Terms of Service</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthFlow;
