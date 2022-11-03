import DesignCredit from "../components/DesignCredit";
import Github from "../components/icons/Github";

function ProfilePageHeader() {
  return (
    <div className="flex min-h-screen min-w-full flex-col items-center justify-center bg-[#DFDFDF] font-poppins">
      <div className="z-20 m-4 flex aspect-[2.] flex-col items-end justify-between rounded-[29px] bg-[#FFFAF2] p-[42px] text-[16px] text-[#13143C] md:m-0 md:w-4/6 md:flex-row">
        <div className="flex justify-between gap-[20px] md:flex-col">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaBpIXGi8muXPliBaKcKEGmrO6MsoGd1LxvQ&usqp=CAU"
            className="h-[100px] w-[100px] rounded-[39px] object-cover"
          />
          <div className="flex flex-col gap-[8px]">
            <p className="text-[24px] font-bold ">MetaMask</p>
            <p className="text-[16px] font-semibold ">@metaMask</p>
            <p className="">MetaMask brings Ethereum to your web browser</p>
          </div>
          <div className="hidden h-16 grid-flow-col gap-2 md:grid">
            <div className="border[1px] border- flex  items-center justify-center rounded-[19px] border border-[#DFDFDF] bg-white">
              {/* <Github /> */}
              <img src="/icons/github.svg" />
            </div>
            <div className="border[1px] border- flex  items-center justify-center rounded-[19px] border border-[#DFDFDF] bg-white">
              {/* <Github /> */}
              <img src="/icons/linkedin.svg" />
            </div>
            <div className="border[1px] border- flex  items-center justify-center rounded-[19px] border border-[#DFDFDF] bg-white">
              {/* <Github /> */}
              <img src="/icons/metamask.svg" />
            </div>
            <div className="border[1px] border- flex  items-center justify-center rounded-[19px] border border-[#DFDFDF] bg-white">
              {/* <Github /> */}
              <img src="/icons/ethereum.svg" />
            </div>
          </div>
        </div>
        <div className="md:hidden grid h-12 mt-4 md:mt-0 md:h-16 grid-flow-col gap-2">
          <div className="border[1px] border- flex  items-center justify-center rounded-[19px] border border-[#DFDFDF] bg-white">
            {/* <Github /> */}
            <img src="/icons/github.svg" />
          </div>
          <div className="border[1px] border- flex  items-center justify-center rounded-[19px] border border-[#DFDFDF] bg-white">
            {/* <Github /> */}
            <img src="/icons/linkedin.svg" />
          </div>
          <div className="border[1px] border- flex  items-center justify-center rounded-[19px] border border-[#DFDFDF] bg-white">
            {/* <Github /> */}
            <img src="/icons/metamask.svg" />
          </div>
          <div className="border[1px] border- flex  items-center justify-center rounded-[19px] border border-[#DFDFDF] bg-white">
            {/* <Github /> */}
            <img src="/icons/ethereum.svg" />
          </div>
        </div>

        <div className="mt-4 flex w-full  flex-col items-start gap-8 md:mt-0 md:items-end md:gap-24">
          <div className="w-full">
            <div className="flex items-center">
              <p className="w-full flex-1">6/8 Organizations</p>
              <img src="/icons/info.svg" />
            </div>
            <div
              className={`after:profile-page-header-progress-bar-before relative mt-2 h-[13px] w-3/4 rounded-full  bg-[#DFDFDF]`}
            ></div>
          </div>
          <div>
            <p className="text-right text-[24px]">
              <span className="font-bold">4K</span> Followers
            </p>
            <button className="mt-[14px] rounded-[8px] bg-[#13143C] px-12 py-4 font-semibold text-white ">
              Follow
            </button>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute top-[475px] z-10  rounded-[33px] bg-[#CFCFCF] blur-[44px]"></div>

      <DesignCredit sourceLink="https://uidesigndaily.com/posts/figma-profile-page-header-card-day-1580" />
    </div>
  );
}

export default ProfilePageHeader;
