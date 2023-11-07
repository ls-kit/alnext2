import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  return (
    <section>
      <Navbar />
      <div className="w-full place-items-center bg-cover lg:mt-32 lg:mb-16 md:mt-32 mt-32 bg-base-200 px-4">
        <div className="bg-white mx-auto rounded-xl pb-4  flex-shrink-0 md:w-full  max-w-[500px] py-2 shadow-2xl bg-base-100">
          <form>
            <div className="flex items-center justify-center mx-6 max-w-7xl gap-4 p-4 flex-col">
              <div className="text-center ">
                <h1 className="text-2xl text-center py-2 font-bold">
                  Login now!
                </h1>
              </div>
              <div className="flex flex-col w-full ">
                <label className="flex items-center justify-between px-1 py-2">
                  <span className="text-sm leading-5">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="shrink h-12 px-4 text-base leading-6 border-2 rounded-lg"
                  required
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="flex items-center justify-between px-1 py-2">
                  <span className="text-sm leading-5">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="shrink h-12 px-4 text-base leading-6 border-2 rounded-lg"
                  required
                />
                <label className="flex items-center justify-between px-1 py-2">
                  <Link
                    href="#"
                    className="text-sm leading-5 text-orange-500 underline"
                  >
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="flex flex-col w-full mt-3">
                <Link
                  href="profile.html"
                  className="inline-flex shrink-0 cursor-pointer flex-wrap items-center justify-center rounded-lg h-12 px-4 min-h-12 text-base leading-4 gap-2 font-bold  text-white bg-gradient-to-r from-orange-500 to-red-400"
                >
                  LOGIN
                </Link>
              </div>
              <div>
                <div className="text-gray-900">
                  Don't have an account?{" "}
                  <Link href="Registration.html" className="text-green-400">
                    Signup
                  </Link>
                </div>
                <div className="flex items-center w-full mt-6 border py-2 px-6 xl:px-8  rounded-md">
                  <FaGoogle />
                  <h1 className="ml-2 text-sm " >Login with Google</h1>
                </div>
                <div className=" flex items-center justify-evenly w-full mt-4 py-2 px-4 xl:px-8 border rounded-md">
                  <FaFacebook />
                  <h1 className="ml-2 text-sm">Login with Facebook</h1>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default LoginPage;
