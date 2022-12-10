import DesignCredit from "../components/DesignCredit";

function SignupForMusicFest() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-hero-pattern  bg-cover bg-center bg-no-repeat text-white">
      <div className="absolute min-h-screen w-full bg-SignupForMusicFestSecondary opacity-80"></div>
      
      <div className="left-2/5 absolute top-0 h-64 w-64 bg-gradient-to-br from-white via-[#FFFDC7] to-white opacity-20 rounded-full shadow-signupForMusicFest"></div>
      
      <div className="z-30 flex flex-col items-center text-white">
        <div className="relative ">
          <h1 className="font-autography text-[80px] lg:text-[144px]  text-SignupForMusicFestPrimary ">
            Music Fest
          </h1>
          <h3 className="absolute left-1/4 bottom-6 text-xs lg:bottom-14 lg:text-2xl font-light italic">
            Biggest Musical Event
          </h3>
        </div>

        <p className="mt-6 text-2xl lg:text-4xl font-semibold uppercase">
          Looking For Volunteers
        </p>

        <div className="mt-4 grid w-full max-w-sm">
          <p className="text-lg">It's just 2 steps and you're done</p>
          <div className="grid gap-2">
            <input
              className="mt-2 lg:mt-4 rounded-md border-2 border-black px-4 py-3 text-black"
              placeholder="Name"
            />
            <input
              className="rounded-md border-2 border-black px-4 py-3 text-black"
              placeholder="Email"
            />
            <button className="rounded-md bg-SignupForMusicFestPrimary py-3 text-center text-lg font-bold uppercase text-black">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <DesignCredit
        textStyle="mt-4 text-white z-20"
        linkStyle="ml-1 text-yellow-500"
        sourceLink="https://www.instagram.com/p/Cl8QgMBICqu/"
      />
    </div>
  );
}

export default SignupForMusicFest;
