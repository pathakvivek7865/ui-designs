import React, { useState } from "react";
import { CgLock } from "react-icons/cg";
import { IoMdApps } from "react-icons/io";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { TbLogout, TbMail } from "react-icons/tb";
import DesignCredit from "../DesignCredit";
import NavItemBilling from "./NavItemBilling";

export default function SidebarBilling() {
  return (
    <nav className="left0  sticky top-0 hidden h-screen w-1/5 flex-col justify-between bg-billingNavBg pb-4  pt-20 lg:flex ">
      <div className="flex w-full flex-col  items-start">
        {/* header */}
        <div className="flex cursor-pointer items-center gap-4 px-10">
          <img
            src="https://i.insider.com/6241c2da093c4d0018053847?width=700"
            className="h-12 w-12 rounded-2xl object-cover"
          />
          <div>
            <p className="font-bold">Ildiko Gaspar</p>
            <p className="text-xs">@igaspar</p>
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col gap-2 px-4 text-billingSecondary">
          <NavItemBilling
            icon={<MdOutlineSpaceDashboard className="h-6 w-6" />}
            title="General"
          />
          <NavItemBilling
            icon={<CgLock className="h-6 w-6" />}
            title="Password"
          />
          <NavItemBilling
            icon={<TbMail className="h-6 w-6" />}
            title="Invitation"
          />
          <NavItemBilling
            icon={<RiBillLine className="h-6 w-6" />}
            title="Billing"
          />
          <NavItemBilling
            icon={<IoMdApps className="h-6 w-6" />}
            title="Apps"
          />
        </div>
      </div>
      <div className="pl-4">
        <NavItemBilling icon={<TbLogout className="h-6 w-6" />} title="Apps" />
        <DesignCredit sourceLink="https://uidesigndaily.com/posts/figma-billing-page-payment-day-1585" />
      </div>
    </nav>
  );
}
