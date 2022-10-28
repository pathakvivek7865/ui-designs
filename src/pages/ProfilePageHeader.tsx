import Github from "../components/icons/Github";

function ProfilePageHeader() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#DFDFDF] font-poppins">
      <div className="z-20 flex h-[418px] w-[1051px] items-end justify-between rounded-[29px] bg-[#FFFAF2] p-[42px] text-[16px] text-[#13143C]">
        <div className="flex h-[334px] w-[304px] flex-col justify-between gap-[20px]">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaBpIXGi8muXPliBaKcKEGmrO6MsoGd1LxvQ&usqp=CAU"
            className="h-[100px] w-[100px] rounded-[39px] object-cover"
          />
          <div className="flex flex-col gap-[8px]">
            <p className="text-[24px] font-bold ">MetaMask</p>
            <p className="text-[16px] font-semibold ">@metaMask</p>
            <p className="">MetaMask brings Ethereum to your web browser</p>
          </div>
          <div className="flex gap-[16px]">
            <div className="border[1px] border- flex h-[64px] w-[64px] items-center justify-center rounded-[19px] border border-[#DFDFDF] bg-white">
              {/* <Github /> */}
              <img src="/icons/github.svg" />
            </div>
            <div className="border[1px] border- flex h-[64px] w-[64px] items-center justify-center rounded-[19px] border border-[#DFDFDF] bg-white">
              {/* <Github /> */}
              <img src="/icons/linkedin.svg" />
            </div>
            <div className="border[1px] border- flex h-[64px] w-[64px] items-center justify-center rounded-[19px] border border-[#DFDFDF] bg-white">
              {/* <Github /> */}
              <img src="/icons/metamask.svg" />
            </div>
            <div className="border[1px] border- flex h-[64px] w-[64px] items-center justify-center rounded-[19px] border border-[#DFDFDF] bg-white">
              {/* <Github /> */}
              <img src="/icons/ethereum.svg" />
            </div>
          </div>
        </div>

        <div className="flex h-[264px] w-[414px] flex-col items-end gap-[96px]">
          <div className="w-full">
            <div className="flex items-center">
              <p className="h-full w-full flex-1">6/8 Organizations</p>
              <img src="/icons/info.svg" />
            </div>
            <div
              className={`after:profile-page-header-progress-bar-before relative mt-2 h-[13px] w-full rounded-full  bg-[#DFDFDF]`}
            ></div>
          </div>
          <div>
            <p className="text-right text-[24px]">
              <span className="font-bold">4K</span> Followers
            </p>
            <button className="mt-[14px] h-[65px] w-[191px] rounded-[8px] bg-[#13143C] font-semibold text-white ">
              Follow
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-[475px] z-10 h-[100px] w-[968px] rounded-[33px] bg-[#CFCFCF] blur-[44px]"></div>
    </div>
  );
}

export default ProfilePageHeader;
