"use client";

import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const initialState = {
  userId: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  password: "",
  image:""
};

interface IinitialState {
  userId: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  image:string
}

const Login = () => {
  const [signUp, setSignUp] = useState<boolean>(true);
  const [form, setForm] = useState<IinitialState>(initialState);
  const router = useRouter()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const dataSendtoApi = await axios.post(
        `/api/${signUp ? "SignUp" : "login"}`,
        form
      );
      
   router.push('/')
      
    } catch (error: any) {
      console.log("error occurred while sending data to server");
    }
  };

  return (
    <div>
      <div className="shadow-2xl px-2 py-10 bg-[#ffffff] min-w-[400px] w-full rounded-lg ">
        {signUp ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-4 justify-center items-center"
          >
            <h1 className="mb-4">{signUp ? "Sign Up" : "Login"}</h1>
            <input
              name="firstName"
              placeholder="Enter your first name"
              onChange={handleChange}
              className="input"
            />
            <input
              name="lastName"
              placeholder="Enter your last name"
              className="input"
              onChange={handleChange}
            />
            <input
              name="phoneNumber"
              placeholder="Enter your phone number"
              className="input"
              onChange={handleChange}
            />
            <input
              name="email"
              placeholder="Enter your email"
              className="input"
              onChange={handleChange}
            />
            <input
              name="password"
              placeholder="Enter your password"
              className="input"
              onChange={handleChange}
            />

            <p className="tracking-wider">
              Already Sign up?
              <button
                onClick={() => {
                  setSignUp(false);
                }}
              >
                Login
              </button>
            </p>
            <button
              className="btn rounded-lg !py-2 w-[300px] mt-8"
              type="submit"
            >
              SignUp
            </button>
          </form>
        ) : (
          <div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-y-4 justify-center items-center"
            >
              <h1 className="mb-4">{signUp ? "Sign Up" : "Login"}</h1>

              <input
                name="email"
                placeholder="Enter your email"
                className="input"
                onChange={handleChange}
              />
              <input
                name="password"
                placeholder="Enter your password"
                className="input"
                onChange={handleChange}
              />

            <input
                name="image"
                placeholder="Enter your image Url"
                className="input"
                onChange={handleChange}
              />


              <p className="tracking-wider">
                Already Sign up?
                <button
                  onClick={() => {
                    setSignUp(false);
                  }}
                >
                  Login
                </button>
              </p>
              <button
                className="btn rounded-lg !py-2 w-[300px] mt-8"
                type="submit"
              >
                SignUp
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
