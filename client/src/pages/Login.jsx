import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const { token, navigate, backendUrl, setToken } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSumbitHandler = async (e) => {
    e.preventDefault();

    try {
      // ✅ SIGN UP
      if (currentState === "Sign Up") {
        const { data } = await axios.post(
          backendUrl + "/api/user/register",
          { name, email, password }
        );

        if (data.success) {
          toast.success("Signup successful! Please login.");

          // Move to Login page
          setCurrentState("Login");

          // Email clear mat karo (browser save prompt ke liye)
          setName("");
          setPassword("");
        } else {
          toast.error(data.message);
        }
      }

      // LOGIN
      else {
        const { data } = await axios.post(
          backendUrl + "/api/user/login",
          { email, password }
        );

        if (data.success) {
          setToken(data.token);
          localStorage.setItem("token", data.token);

          toast.success("Login successful!");

          //Redirect to Home
          navigate("/");
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  // Already logged in → home page
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <form
      onSubmit={onSumbitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {currentState === "Sign Up" && (
        <input
          className="w-full px-3 py-2 border border-gray-800"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      )}

      <input
        className="w-full px-3 py-2 border border-gray-800"
        type="email"
        placeholder="Email"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        className="w-full px-3 py-2 border border-gray-800"
        type="password"
        placeholder="Password"
        autoComplete={
          currentState === "Sign Up" ? "new-password" : "current-password"
        }
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot Password?</p>

        {currentState === "Sign Up" ? (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Login Here
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer"
          >
            Create an account
          </p>
        )}
      </div>

      <button className="bg-black text-white font-light px-8 py-2 mt-4 cursor-pointer">
        {currentState}
      </button>
    </form>
  );
};

export default Login;
