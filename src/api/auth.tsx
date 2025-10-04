"use client";

import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";
import Image from "next/image";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        fontFamily: "var(--font-montserrat)",
        background: "linear-gradient(to bottom right, #d6b8f0, #c7ebf8)",
      }}
    >
      <div className="flex w-4/5 max-w-6xl shadow-lg rounded-2xl overflow-hidden">
        {/* Left Side - Login Form */}
        <div className="w-1/2 bg-white bg-opacity-90 p-10 flex flex-col justify-center rounded-l-2xl">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Login</h2>
          <form onSubmit={handleSignIn} className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="text-sm text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="username@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <span className="text-sm text-blue-700 mt-1 cursor-pointer hover:underline">
                Forgot Password?
              </span>
            </div>
            <button
              type="submit"
              className="mt-4 bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Sign in
            </button>
          </form>

          <p className="text-center my-4 text-gray-500">or continue with</p>
          <div className="flex justify-center gap-4">
            <button className="p-2 rounded-full bg-white shadow hover:scale-105 transition">
              <FcGoogle size={24} />
            </button>
            <button className="p-2 rounded-full bg-white shadow hover:scale-105 transition">
              <FaGithub size={24} />
            </button>
            <button className="p-2 rounded-full bg-white shadow hover:scale-105 transition">
              <FaFacebook size={24} color="#1877F2" />
            </button>
          </div>

          <p className="text-center text-gray-500 mt-6">
            Don&apos;t have an account yet?{" "}
            <span className="text-blue-700 cursor-pointer hover:underline">
              Register for free
            </span>
          </p>
        </div>

        {/* Right Side - Welcome Message */}
        <div className="w-1/2 flex flex-col items-center justify-center bg-gradient-to-b from-purple-200 to-blue-200 relative">
          <Image
            src="/images/zodiac-wheel.png"
            alt="Zodiac Wheel"
            className="absolute inset-0 w-full h-full object-contain opacity-20"
            width={500}
            height={500}
          />
          <h1 className="text-4xl font-bold text-purple-700 text-center z-10">
            Welcome to <br /> Osheen Oracle
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
