import React, { useState } from "react";
import DesignCredit from "../components/DesignCredit";

function RentalCarSearch() {
  const [isDeliverSomewhereElse, setIsDeliverSomewhereElse] = useState(false);
  const [isDriverAgeChecked, setIsDriverAgeChecked] = useState(true);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-rentalCarSearchBg font-mulish ">
      {/* card */}
      <div className="relative mx-4 my-20 flex  max-w-xl flex-col justify-between  gap-6 overflow-hidden rounded-2xl bg-white p-8 text-sm font-bold text-rentalCarSearchPrimary shadow-enterPasswordCardShadow md:m-0 md:p-10 lg:w-6/12">
        <h2 className="font-merriweather text-xl ">Search for a rental car</h2>
        {/* forms */}
        <div className="grid gap-6">
          {/* location */}
          <div className="flex flex-col">
            <p className="text-xs ">Pick up location</p>
            <input
              type="text"
              placeholder="City, airport, region, district..."
              className="placeholder:text mt-1 max-w-md rounded-[4px] border border-rentalCarSearchSecondary p-3  placeholder:text-rentalCarSearchPrimary"
            />
            <label
              htmlFor="deliverCarSomewhereElse"
              className="mt-2 flex items-center gap-2"
            >
              <input
                onClick={() =>
                  setIsDeliverSomewhereElse(!isDeliverSomewhereElse)
                }
                checked={isDeliverSomewhereElse}
                onChange={() => {}}
                id="deliverCarSomewhereElse"
                type="checkbox"
                className="sr-only"
              />
              <div
                className={`${
                  isDeliverSomewhereElse
                    ? "bg-rentalCarSearchPrimary"
                    : "bg-transparent"
                } h-5 w-5 rounded-[4px] border border-rentalCarSearchSecondary checked:fill-rentalCarSearchPrimary`}
              >
                {isDeliverSomewhereElse && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute h-5 w-4 text-white"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                )}
              </div>
              <p>Deliver the car somewhere else</p>
            </label>
          </div>
          {/* DateTime */}
          <div className="flex flex-col gap-4 sm:flex-row ">
            {/* Date of Pickup */}
            <MyDate />
            {/* Date of delivery */}
            <MyDate />
          </div>

          {/* Driver age checkbox */}
          <label htmlFor="driver-age-check" className="flex gap-2">
            <input
              onClick={() => setIsDriverAgeChecked(!isDriverAgeChecked)}
              checked={isDriverAgeChecked}
              onChange={() => {}}
              type="checkbox"
              id="driver-age-check"
              className="sr-only"
            />
            <div
              className={`${
                isDriverAgeChecked
                  ? "bg-rentalCarSearchPrimary"
                  : "bg-transparent"
              } relative h-5 w-5 rounded-[4px] border border-rentalCarSearchSecondary  checked:fill-rentalCarSearchPrimary`}
            >
              {isDriverAgeChecked && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute h-5 w-4 text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
              )}
            </div>
            <p>The driver’s age between 30 and 65?</p>
            <img src="/icons/info.svg" className="h-5 w-5" />
          </label>

          {/* Additional checks */}
          <div>
            <CheckedItem text="No credit card fees" />
            <CheckedItem text="No change fees" />
            <CheckedItem text="Price match guarantee" />
          </div>
        </div>

        {/* Search button */}
        <button className="rounded-2xl bg-rentalCarSearchAccent py-6 text-lg text-white md:rounded-3xl">
          Search
        </button>
      </div>
      <DesignCredit sourceLink="https://uidesigndaily.com/posts/figma-rent-a-car-ui-design-card-search-day-1579" />
    </div>
  );
}

export default RentalCarSearch;

export const MyDate = () => {
  return (
    <div className="grid w-full gap-2">
      <p className="-mb-1 text-xs">Date of Pickup</p>
      <div className="flex items-center justify-between gap-2 rounded-[4px] border border-rentalCarSearchSecondary p-3">
        <div className="flex items-center gap-2">
          <img
            src="/icons/calendar.svg"
            className="h-5 w-5 text-rentalCarSearchPrimary"
          />
          <select className="appearance-none bg-transparent focus:outline-none">
            <option>Sat 26 Mar 2022</option>
          </select>
        </div>
        <img src="/icons/chevron-down.svg" />
      </div>
      <div className="grid w-full grid-flow-col">
        <div className="flex items-center justify-between gap-2  rounded-l-[4px] border border-rentalCarSearchSecondary p-3">
          <div className="flex items-center gap-2">
            <img
              src="/icons/calendar.svg"
              className="h-5 w-5 text-rentalCarSearchPrimary"
            />
            <select className="appearance-none bg-transparent focus:outline-none">
              <option>10</option>
            </select>
          </div>
          <img src="/icons/chevron-down.svg" />
        </div>
        <div className="flex items-center justify-between gap-2 rounded-r-[4px] border border-rentalCarSearchSecondary p-3">
          <div className="flex items-center gap-2">
            <img
              src="/icons/calendar.svg"
              className="h-5 w-5 text-rentalCarSearchPrimary"
            />
            <select className="appearance-none bg-transparent focus:outline-none">
              <option>00</option>
            </select>
          </div>
          <img src="/icons/chevron-down.svg" />
        </div>
      </div>
    </div>
  );
};

export function CheckedItem({ text = "unknown" }: { text: string }) {
  return (
    <div className="flex gap-2">
      <img src="/icons/check.svg" className="h-5 w-5" />
      <p>{text}</p>
    </div>
  );
}
