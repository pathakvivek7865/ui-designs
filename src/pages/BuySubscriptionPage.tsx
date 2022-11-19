import DesignCredit from "../components/DesignCredit";

function BuySubscriptionPage() {
  return (
    <div className="px-4 py-16 lg:py-2 flex min-h-screen flex-col items-center justify-center bg-BuySubscriptionBg font-poppins text-sm font-medium">
      <h2 className="text-center font-merriweather text-2xl lg:text-3xl font-black text-BuySubscriptionText">
        Get the most out of your mobile
        <br /> with the right subscription
      </h2>
      <p className="mt-8 lg:mt-4 text-center text-xs lg:text-sm font-medium">
        All devices come with free delivery or pickup as standard. See
        information on <br /> available shopping options for your location.
      </p>
      <div className="mt-16 grid grid-flow-col grid-rows-3 gap-12 lg:grid-rows-1">
        <div className="relative">
          <div className="sticky z-20 flex aspect-[.9] h-72 flex-col  items-start justify-between rounded-2xl bg-white p-8">
            <div className="">
              <p className="text-2xl font-extrabold">ice</p>
              <p className="mt-2 font-semibold">Ice Mobile 10GB</p>
              <p className="mt-1 text-xs font-medium">Up to 100Mbit/s</p>
              <div className="mt-4 flex items-center gap-1">
                <span className="text-xl font-bold">299,-</span>
                <span className="text-xs font-medium">/month</span>
              </div>
            </div>
            <button className="rounded-full border-2 border-BuySubscriptionBorder bg-BuySubscriptionBg py-3 px-5 shadow-BuySubscriptionButton">
              Add Subscription
            </button>
          </div>
          <div className="absolute -top-6 -left-6 aspect-[.9] h-72 rounded-2xl bg-[#FCC83C] bg-opacity-40"></div>
        </div>

        <div className="relative">
          <div className="sticky z-20 flex aspect-[.9] h-72 flex-col  items-start justify-between rounded-2xl bg-white p-8">
            <div className="">
              <p className="text-2xl font-extrabold">Telia</p>
              <p className="mt-2 font-semibold">Telia Mobil 15GB</p>
              <p className="mt-1 text-xs font-medium">
                Unlimited calls, SMS and MMS
              </p>
              <div className="mt-4 flex items-center gap-1">
                <span className="text-xl font-bold">953,-</span>
                <span className="text-xs font-medium">/month</span>
              </div>
            </div>
            <button className="rounded-full border-2 border-BuySubscriptionBorder bg-BuySubscriptionBg py-3 px-5 shadow-BuySubscriptionButton">
              Add Subscription
            </button>
          </div>
          <div className="absolute -top-6 -left-6 aspect-[.9] h-72 rounded-2xl bg-[#D498F4] bg-opacity-40"></div>
        </div>

        <div className="relative">
          <div className="sticky z-20 flex aspect-[.9] h-72 flex-col  items-start justify-between rounded-2xl bg-white p-8">
            <div className="">
              <p className="text-2xl font-extrabold">Telenor</p>
              <p className="mt-2 font-semibold">Telenor Next Fast</p>
              <p className="mt-1 text-xs font-medium">Up to 100Mbit/s</p>
              <div className="mt-4 flex items-center gap-1">
                <span className="text-xl font-bold">1028,-</span>
                <span className="text-xs font-medium">/month</span>
              </div>
            </div>
            <button className="rounded-full border-2 border-BuySubscriptionBorder bg-BuySubscriptionBg py-3 px-5 shadow-BuySubscriptionButton">
              Add Subscription
            </button>
          </div>
          <div className="absolute -top-6 -left-6 aspect-[.9] h-72 rounded-2xl bg-[#9494A3] bg-opacity-10"></div>
        </div>
      </div>

      <button className="mt-8 rounded-full bg-BuySubscriptionText px-6 py-4 text-white ">
        See all subscriptions
      </button>

      <DesignCredit sourceLink="https://uidesigndaily.com/posts/figma-buy-subscription-section-pricing-card-day-1574" />
    </div>
  );
}

export default BuySubscriptionPage;
