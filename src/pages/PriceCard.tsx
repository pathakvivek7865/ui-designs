import DesignCredit from "../components/DesignCredit";

function PriceCard() {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center bg-[#F1F4FF] font-poppins text-[12px] text-[#1B255A]">
      <div className="flex h-[450px] w-[356px] flex-col items-center justify-between rounded-[30px] bg-white py-[38px] px-[52px] shadow-priceCard">
        <div className="flex h-[94px] w-[94px] flex-col items-center justify-center rounded-[86px] border border-[#A6ADD2] shadow-priceCardTopCircle">
          <img src="/icons/image.svg" className="h-[44px] w-[44px]" />
          <p className="font-bold uppercase tracking-wide">Basic</p>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <p className="text-center font-medium">KR</p>
            <p className="ml-[8px] text-[30px] font-bold">199</p>
          </div>
          <p className="font-medium leading-3 uppercase">nok/month</p>
        </div>
        <div>
          <div className="flex w-[206px] items-center cursor-pointer justify-between gap-[8px]">
            <div className="flex h-[42px] w-[48px] items-center justify-center rounded-[15px] border-2 border-[#D2D9F3] bg-white">
              <p className="text-[18px] font-medium">10</p>
            </div>
            <div className="flex h-[42px] w-[50px] items-center justify-center rounded-[15px] bg-[#1B255A] text-white">
              <p className="text-[18px] font-medium">25</p>
            </div>
            <div className="flex h-[42px] w-[50px] items-center justify-center rounded-[15px] border-2 border-[#D2D9F3] bg-white">
              <p className="text-[18px] font-medium">50</p>
            </div>
            <div className="flex h-[42px] w-[50px] items-center justify-center rounded-[15px] border-2 border-[#D2D9F3] bg-white">
              <p className="text-[18px] font-medium">100</p>
            </div>
          </div>
          <p className="mt-[12px] text-center font-medium">
            Downloads per month
          </p>
        </div>
        <button className="h-[56px] w-[252px] rounded-[6px] bg-[#1B255A] p-[8px] text-[14px] font-medium text-white">
          Subscribe
        </button>
      </div>
      <DesignCredit sourceLink="https://uidesigndaily.com/posts/figma-price-card-pricing-day-1549" />
    </div>
  );
}

export default PriceCard;
