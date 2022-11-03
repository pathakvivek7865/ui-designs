import DesignCredit from "../components/DesignCredit";

function Login() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-r from-[#339] to-[#f0c] font-poppins">
      <div className="before:login-card-before relative z-20 flex h-[30rem]  w-[20rem]  flex-col items-center justify-center rounded-md bg-white/50 py-20">
        <img className="z-20 h-14 w-14" src="/icons/github.svg"/>
        {/* login header */}
        <div className="mt-8 text-center">
          <h1 className="text-2xl font-bold">Sign In</h1>
          <p className="mt-2 text-xs font-light tracking-tighter">
            Please login to use platform
          </p>
        </div>

        {/* login form */}
        <form className="">
          <div className="login-input-div">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-mail opacity-30"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <rect x="3" y="5" width="18" height="14" rx="2"></rect>
              <polyline points="3 7 12 13 21 7"></polyline>
            </svg>
            <input
              className="login-input"
              type="email"
              placeholder="Enter Email"
              required
              autoFocus
            />
          </div>
          <div className="login-input-div mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-lock opacity-30"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <rect x="5" y="11" width="14" height="10" rx="2"></rect>
              <circle cx="12" cy="16" r="1"></circle>
              <path d="M8 11v-4a4 4 0 0 1 8 0v4"></path>
            </svg>
            <input
              className="login-input"
              type="password"
              placeholder="Enter Password"
              required
            />
          </div>
          <div className="mt-6 flex w-full justify-between text-xs ">
            <div className="flex space-x-2 ">
              <input type="checkbox" id="rememberMeCheckbox" />
              <label className="cursor-pointer" htmlFor="rememberMeCheckbox">
                Remember Me
              </label>
            </div>
            <a className="text-blue-900" href="#">
              I forgot my password
            </a>
          </div>
          <button
            className="mt-8 h-10 w-full rounded-full bg-black text-sm uppercase tracking-wider text-white"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 w-10/12 text-center text-xs">
          Don't have an account?
          <span className="z-30 cursor-pointer text-blue-900">
            {" "}
            Create a free account.
          </span>
        </p>
      </div>

      {/* login footer */}
      <div className="mt-8 ">
        <p className="text-xs font-medium uppercase text-black/80">
          Other sign-in Platform
        </p>
        <div className="mt-2 flex items-center justify-center space-x-4">
          <div className="rounded-full bg-white/50 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-facebook"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
            </svg>
          </div>
          <div className="rounded-full bg-white/50 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-google "
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8"></path>
            </svg>
          </div>
        </div>
      </div>
      <DesignCredit sourceLink="https://www.youtube.com/watch?v=B6e4Fg_-CXY" />
    </div>
  );
}

export default Login;
