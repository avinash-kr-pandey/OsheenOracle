"use client";

import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";
import Image from "next/image";

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      console.log("Register Data:", { name, email, phone, otp });
    } else {
      console.log("Login Data:", { email, password });
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#E8CDF0] to-[#C8F4FD] w-full min-h-screen flex flex-col">
      {/* Logo */}
      <div className="w-full flex justify-center md:justify-start p-4 md:px-10">
        <Image
          src="/logo.png"
          alt="Logo"
          width={80}
          height={80}
          className="object-cover"
        />
      </div>

      <div
        className="flex-1 flex items-center justify-center md:px-4 px-2 md:py-0 py-5"
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        <div className="flex flex-col md:flex-row w-full max-w-7xl gap-6 md:gap-10">
          {/* Welcome Message (LEFT SIDE now) */}
          <div className="order-1 w-full md:w-2/3 flex flex-col items-center justify-center relative p-6 sm:p-10">
            <Image
              src="/images/roundimage.png"
              alt="Zodiac Wheel"
              className="absolute inset-0 w-full h-full object-contain opacity-20"
              width={600}
              height={600}
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-purple-700 text-center md:text-left z-10 font-bold leading-tight">
              Welcome to <br /> Osheen Oracle
            </h1>
          </div>

          {/* Auth Form (RIGHT SIDE now) */}
          <div className="order-2 w-full md:w-1/3 bg-white bg-opacity-90 p-6 sm:p-10 flex flex-col justify-center rounded-lg shadow-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-6 text-center md:text-left">
              {isRegister ? "Register" : "Login"}
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {isRegister && (
                <>
                  <div className="flex flex-col">
                    <label className="text-sm sm:text-base text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm sm:text-base text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm sm:text-base text-gray-700 mb-1">
                      OTP
                    </label>
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                      required
                    />
                  </div>
                </>
              )}

              {!isRegister && (
                <>
                  <div className="flex flex-col">
                    <label className="text-sm sm:text-base text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="username@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm sm:text-base text-gray-700 mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                      required
                    />
                    <span className="text-sm sm:text-base text-blue-700 mt-1 cursor-pointer hover:underline text-right">
                      Forgot Password?
                    </span>
                  </div>
                </>
              )}

              <button
                type="submit"
                className="mt-4 bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition shadow-md"
              >
                {isRegister ? "Register" : "Sign in"}
              </button>
            </form>

            <p className="text-center my-4 text-gray-500 text-sm sm:text-base">
              or continue with
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <button className="p-3 rounded-full bg-white shadow-lg hover:scale-105 transition">
                <FcGoogle size={24} />
              </button>
              <button className="p-3 rounded-full bg-white shadow-lg hover:scale-105 transition">
                <FaGithub size={24} />
              </button>
              <button className="p-3 rounded-full bg-white shadow-lg hover:scale-105 transition">
                <FaFacebook size={24} color="#1877F2" />
              </button>
            </div>

            <p className="text-center text-gray-500 mt-6 text-sm">
              {isRegister
                ? "Already have an account? "
                : "Don't have an account yet? "}
              <span
                className="text-blue-700 cursor-pointer hover:underline font-medium"
                onClick={() => setIsRegister(!isRegister)}
              >
                {isRegister ? "Login here" : "Register for free"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
