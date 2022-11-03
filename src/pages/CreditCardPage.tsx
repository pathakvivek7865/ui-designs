import DesignCredit from "../components/DesignCredit";

function CreditCardPage() {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center bg-slate-200 font-montserrat">
      <div className="before:shadow-circle relative m-4 flex  flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-black via-[#444] to-black p-6 text-white shadow-2xl shadow-black sm:w-[28rem] ">
        {/* top */}
        <div className="flex items-center justify-between">
          <p className="z-20 text-xl font-medium tracking-wider sm:text-2xl">
            Credit Card
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="m-0 h-6 w-6 p-0 sm:h-6 sm:w-6 "
            viewBox="0 0 16 16"
          >
            <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z" />{" "}
            <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z" />
          </svg>
        </div>
        {/* center   */}
        <div>
          <img
            className="z-20 mt-1 ml-2 w-10 sm:mt-4 sm:w-12"
            src="/sim-card.png"
          />
        </div>
        {/* bottom */}
        <div className="z-20 mt-2 flex h-full items-center justify-between tracking-widest sm:mt-4">
          <div className=" ">
            <p className="text-lg font-medium sm:text-2xl">
              4356 2323 6433 2365
            </p>
            <p className="mt-2 text-sm sm:mt-4">10/26</p>
            <p className="mt-2 text-sm">Vivek Pathak</p>
          </div>
          <div className="flex flex-col items-center justify-between">
            <img className="w-16" src="/visa.png" />
            <p className="text-sm">Debit</p>
          </div>
        </div>
      </div>
      <DesignCredit sourceLink="https://www.youtube.com/watch?v=5DFvs2qyEvo&t=25s" />
    </div>
  );
}

export default CreditCardPage;
