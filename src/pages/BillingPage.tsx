import SidebarBilling from "../components/billing/SidebarBilling";
import { TableBilling } from "../components/billing/TableBilling";
import { RiMenu3Line } from "react-icons/ri";
import { useState } from "react";

import { ImCross } from "react-icons/im";

export const BillingPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-white font-poppins text-sm text-billingPrimary">
      {/* Sidebar */}
      <SidebarBilling />

      {/* Main Content */}
      <main className="w-full flex-1 py-24 lg:py-20">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="transition duration-300 flex w-full justify-end"
        >
          {isSidebarOpen ? (
            <ImCross className="mr-8 -mt-16 h-8 w-8 lg:hidden" />
          ) : (
            <RiMenu3Line className="mr-8 -mt-16 h-8 w-8 lg:hidden" />
          )}
        </button>
        <h1 className="px-8 text-3xl font-bold lg:px-20">Billing</h1>

        {/* middle part */}
        <div className="mt-16  flex w-full flex-col justify-between lg:flex-row">
          {/* left */}
          <div className="flex w-full flex-col gap-16 lg:w-9/12 ">
            {/* order history */}
            <div className="px-8 lg:px-20">
              <p className="font-bold">Order History</p>
              <p className="text-xs font-medium">
                Manage billing information and view receips
              </p>
            </div>

            {/* Table */}
            <div className="mr-16 w-full px-8 lg:px-16">
              <TableBilling />
              <a href="#">
                <p className="px-4 pt-6 font-medium text-billingAccent underline">
                  Load more
                </p>
              </a>
            </div>
          </div>

          {/* your plan */}
          <section className="mx-8 mt-16 lg:mt-0 flex h-min max-w-sm flex-col  justify-start  rounded-2xl bg-billingAccent p-8 font-medium text-white lg:mx-0 lg:mr-16">
            <p>Your plan</p>
            <p className="mt-6 text-xl font-bold">Pro Annual</p>
            <p className="mt-4 text-xs">Renews on Nov. 2021</p>
            <button className="mt-4 whitespace-nowrap rounded-lg border border-white bg-transparent px-4 py-2">
              Cancel subscription
            </button>
          </section>
        </div>

        {/* Payment Method */}
        <section className="mx-8 lg:w-6/12 lg:mx-20  mt-16 lg:mt-20 ">
          <div className="">
            <p className="font-bold">Payment Method</p>
            <p className="text-xs font-medium">
              Manage billing information and view receips
            </p>
          </div>
          <div className="mt-8 flex items-center justify-between gap-4">
            <img src="/visa.png" className="w-8" />
            <p className="lg:ml-4 lg:flex-1 font-medium">Visa ending in 2255</p>
            <button className="rounded-md border border-billingBg px-4 py-2">
              Remove
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};
