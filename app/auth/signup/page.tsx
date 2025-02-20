"use client";

import Image from "next/image";
import Navbar from "../../../components/Navbar";
import Link from "next/link";
import { FormEvent, useState } from "react";

const page = () => {


  const [error, setError] = useState("");

  const signUpHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("https://2529-102-89-22-57.ngrok-free.app/api/v1/auth/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          first_name : firstname,
          last_name : lastname,
          email,
          password1 : password,
          password2,
        }),
      });
      const data = await res.json();
      console.log(data);
      
    } catch (error) {
      setError((error as Error).message);
    }
  };

  const [username, setUsername] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  return (
    <div className="bg-neutral min-h-dvh text-accent">
      <Navbar />
      <div className="px-5">
        <div className="max-w-7xl flex-col lg:flex-row w-full gap-10 mx-auto mt-12 flex justify-between items-center">
          <div className="flex max-w-[400px] flex-col md:max-w-[586px]">
            <h1 className="mb-4 text-[35px] font-bold leading-[48px] tracking-[-0.025em] md:text-[40px] lg:text-[54px] lg:leading-[67.2px]">
              Create Your Account
            </h1>
            <p className="mb-6 text-base md:text-2xl">
              Sign up to enjoy our seamless buying and selling experience, earn
              gems, and much more!
            </p>
            <form onSubmit={signUpHandler} className="space-y-4">
              <input
                onChange={(e) => setFirstName(e.target.value)}
                value={firstname}
                required
                type="text"
                placeholder="First Name"
                className="w-full py-3 px-6 bg-neutral-light text-neutral text-base rounded"
              />
              <input
                onChange={(e) => setLastname(e.target.value)}
                value={lastname}
                required
                type="text"
                placeholder="Last Name"
                className="w-full py-3 px-6 bg-neutral-light text-neutral text-base rounded"
              />
              <input
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                required
                type="text"
                placeholder="Username"
                className="w-full py-3 px-6 bg-neutral-light text-neutral text-base rounded"
              />
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                type="email"
                placeholder="Email"
                className="w-full py-3 px-6 bg-neutral-light text-neutral text-base rounded"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                placeholder="Password"
                className="w-full py-3 px-6 bg-neutral-light text-neutral text-base rounded"
              />
              <input
                value={password2}
                required
                type="password"
                onChange={(e) => setPassword2(e.target.value)}
                placeholder="Confirm Password"
                className="w-full py-3 px-6 bg-neutral-light text-neutral text-base rounded"
              />
              <button
                type="submit"
                className="w-full py-3 px-6 bg-secondary text-neutral text-base font-medium rounded"
              >
                Sign Up
              </button>
              <p className="text-center text-accent">
                Already Have An Account ? &nbsp;
                <Link className="font-bold" href={"/auth/signin"}>
                  Login
                </Link>
              </p>
            </form>
          </div>
          <Image
            src={"/images/img.jpeg"}
            alt="Sign Up Image"
            layout="responsive"
            width={500}
            height={500}
            className="max-h-[639px] hidden lg:block max-w-[553px] w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
