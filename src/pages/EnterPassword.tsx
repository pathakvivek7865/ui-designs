import React, { useState } from "react";
import DesignCredit from "../components/DesignCredit";

export default function EnterPassword() {
  const [isPasswordSeen, setIsPasswordSeen] = useState(false);
  const [isStaySignedIn, setIsStaySignedIn] = useState(true);

  return (
    <div className="flex  min-h-screen w-full flex-col items-center justify-center bg-[#132B50] bg-opacity-5 font-inter">
      <div className="m-4 flex aspect-square flex-col items-start justify-between rounded-2xl bg-white p-8 text-[#132B50] shadow-enterPasswordCardShadow lg:p-16">
        <h2 className="text-xl font-bold md:text-2xl ">Enter your password</h2>
        {/* Header */}
        <div className="flex items-center gap-3">
          <img
            className="aspect-square h-12 rounded-full "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR66rEoJAM20CSdsUpKMYzSRsoI3qIuYckSQ&usqp=CAU"
          />
          <div>
            <p className="text-xs font-medium">Business Account</p>
            <p className="text-sm font-bold">Sarah Bills</p>
          </div>
        </div>
        {/* input */}
        <div>
          <p className="text-xs font-semibold">Password</p>
          <div className="mt-1 flex items-center justify-between gap-4">
            <div className="flex w-11/12 items-center gap-4 rounded-md border-2 border-[#132B50] p-2 placeholder:font-inter md:p-3">
              <img src="/icons/lock.svg" />
              <input
                autoFocus={true}
                className="w-full"
                type={isPasswordSeen ? "text" : "password"}
                placeholder="********"
              />
            </div>
            <img
              onClick={() => setIsPasswordSeen(!isPasswordSeen)}
              className="cursor-pointer"
              src={isPasswordSeen ? "/icons/eye.svg" : "/icons/eye-off.svg"}
            />
          </div>
        </div>
        {/* button */}
        <div className="flex w-11/12 items-center justify-between">
          <div className="focus: flex items-center justify-between gap-2">
            <div className="flex w-full items-center justify-center">
              <label
                htmlFor="toggleB"
                className="flex cursor-pointer items-center gap-2"
              >
                <div className=" relative">
                  <input
                    onClick={() => setIsStaySignedIn(!isStaySignedIn)}
                    checked={isStaySignedIn}
                    onChange={(e) => console.log(e.target.value)}
                    type="checkbox"
                    id="toggleB"
                    className="group sr-only"
                  />
                  <div className="block h-8 w-12 md:h rounded-full border border-[#132B50] "></div>
                  <div
                    className={`absolute  top-1.5 h-5 w-5 transform rounded-full duration-300   ${
                      isStaySignedIn
                        ? "right-1.5 bg-[#132B50]"
                        : "left-1.5 bg-gray-400"
                    }`}
                  ></div>
                </div>
                <p className="text-sm font-semibold">Stay signed in</p>
              </label>
            </div>
          </div>
          <button className="mr-4 rounded-md bg-[#132B50] p-3 active:outline-none  text-sm font-semibold text-white">
            Continue
          </button>
        </div>
        {/* Reset pasword */}
        <a className="cursor-pointer text-sm font-semibold underline">
          Reset Password
        </a>
      </div>
      <DesignCredit sourceLink="https://uidesigndaily.com/posts/figma-enter-password-log-in-authentication-card-day-1583" />
    </div>
  );
}
