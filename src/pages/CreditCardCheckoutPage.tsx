import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import DesignCredit from "../components/DesignCredit";

function CreditCardCheckoutPage() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="relative mx-auto h-full min-h-screen max-w-sm overflow-y-scroll bg-[#E1EAF9] font-poppins">
      <div className="flex h-[56px] items-center  bg-blue-500 px-4 text-lg text-white">
        <RxHamburgerMenu className="" />
        <p className="ml-4 text-center">Select Your Card</p>
      </div>
      <div className="relative mx-4 my-10 h-56">
        <div className="absolute top-0 left-8 z-10 mx-auto flex h-40 w-72 justify-center rounded-lg bg-[#A3A9F4] "></div>
        <div className="absolute top-4 left-4 z-20 h-40 w-80 rounded-lg bg-[#787CAA]"></div>
        <div className="absolute top-8 left-0 z-30 grid h-52 w-full overflow-hidden rounded-xl bg-gradient-to-tr from-[#1E299C] to-[#16215B] p-6 text-white">
          <p className="text-sm font-bold">
            Credit <span className="font-normal">Card</span>
          </p>
          <div className="flex items-center gap-2">
            <img className="mt-1 h-8 object-contain" src="/sim-card.png" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="m-0 h-6 w-6 rotate-90 p-0 transition sm:h-6 sm:w-6 "
              viewBox="0 0 16 16"
            >
              <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z" />{" "}
              <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z" />
            </svg>
          </div>
          <div className="mt-2 flex items-center justify-between text-justify text-2xl font-extrabold ">
            <p className="">XXXX</p>
            <p className="">XXXX</p>
            <p className="">XXXX</p>
            <p className="">7148</p>
          </div>
          <div className="mt-2 flex items-center justify-between text-sm">
            <div>
              <p className="text-[#4B56BE]">Card Holders Name</p>
              <p className="uppercase">ABHIYAN LUITEL</p>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-[#4B56BE]">Exp. Date</p>
              <p>12/23</p>
            </div>
          </div>
        </div>
      </div>

      <div className="-mt-3 flex w-full items-center justify-center gap-2 ">
        <div className="rounded-full border border-black p-1"></div>
        <div className="rounded-full border border-black bg-black p-1.5"></div>
        <div className="rounded-full border border-black p-1"></div>
      </div>

      {isExpanded ? (
        <div className="mx-4 my-8">
          <button
            onClick={() => setIsExpanded(false)}
            className="borderd  flex h-40 w-full max-w-sm items-center  justify-center rounded-md border-2 border-dashed border-[#787CAA]"
          >
            <p className="text-[#787CAA]">+ Add Another</p>
          </button>
        </div>
      ) : (
        <div className="mx-4 mt-8 flex max-w-sm flex-col gap-4 rounded-lg bg-white p-4 text-sm">
          <div>
            <label>Card Holder Name</label>
            <input type="text" className="border-b border-black" />
          </div>

          <div>
            <label>Card Number</label>
            <input type="text" className="border-b border-black" />
          </div>

          <div className="grid grid-flow-col">
            <div className="grid">
              <label>Expiry Date</label>
              <input type="text" className="w-1/2 border-b border-black" />
            </div>
            <div className="grid">
              <label>CVV</label>
              <input type="text" className="w-1/2 border-b border-black" />
            </div>
          </div>

          <div className="mt-2 flex space-x-2 text-xs">
            <input type="checkbox" id="rememberMeCheckbox" />
            <label className="cursor-pointer" htmlFor="rememberMeCheckbox">
              Remember this card
            </label>
          </div>

          <div className="mt-4 flex justify-end gap-4">
            <button
              onClick={() => setIsExpanded(true)}
              className="rounded-md border px-4 py-2"
            >
              Cancel
            </button>
            <button
              onClick={() => setIsExpanded(true)}
              className="rounded-md bg-amber-500 px-4 py-2"
            >
              Add Card
            </button>
          </div>
        </div>
      )}

      <div className="h-96"></div>

      <div
        className={`fixed left-0 bottom-0 z-50 mx-auto  w-full max-w-sm rounded-t-2xl bg-white p-6 shadow-2xl lg:left-1/3 lg:ml-8 `}
      >
        <div className={`${isExpanded ? "block" : "hidden"}`}>
          <div className="pb-4 flex items-start justify-between">
            <p className=" font-bold">Order Summary</p>
            <button className="text-[#30D1FF] m-0 p-0">See All</button>
          </div>
          <hr />
          {/* Product 1 */}
          <div className="my-1.5 flex items-center justify-between text-sm">
            {/* Left part */}
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-sm bg-red-100 shadow-sm">
                <img src="https://iremaxnepal.com.np/wp-content/uploads/2022/03/tws-46.jpg" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-medium">TWS-55</p>
                <p className="text-xs text-[#787CAA]">Airbuds</p>
              </div>
            </div>

            {/* Right part */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center border-2 px-5 py-1">
                1
              </div>
              <p className="font-medium">$300</p>
            </div>
          </div>
          <hr />

          {/* Product 2 */}
          <div className="my-1.5 flex items-center justify-between text-sm">
            {/* Left part */}
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-sm bg-red-100 shadow-sm">
                <img src="https://usoftstore.s3.ap-south-1.amazonaws.com/uploads/all/jgOHRbEMTMm16fxSZyIfvgmiSBiygP09gcaKqmRr.jpg" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-medium">Wired</p>
                <p className="text-xs text-[#787CAA]">Gaming Mouse</p>
              </div>
            </div>

            {/* Right part */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center border-2 px-5 py-1">
                1
              </div>
              <p className="font-medium">$700</p>
            </div>
          </div>
          <hr />
        </div>

        <div
          className={`flex ${
            isExpanded ? "mt-3 justify-end" : "mt-0 justify-start"
          }`}
        >
          <span className="font-medium">Total: </span>
          <span className="font-bold">$1,000</span>
        </div>
        <button className="mt-4 w-full rounded-lg bg-[#30D1FF] py-4 font-medium">
          Proceed to checkout
        </button>

        <div className="flex justify-center">
          <DesignCredit sourceLink="https://www.instagram.com/p/CmBdcHhyUea/" />
        </div>
      </div>
    </div>
  );
}

export default CreditCardCheckoutPage;
