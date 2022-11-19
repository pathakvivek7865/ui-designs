function AnimatedNavbar() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="group relativew w-full h-full bg-white">
        <a
          href="#"
          className="group bg-white w-full absolute top-20 left-20 flex items-center gap-8 overflow-hidden  "
        >
          <span className="flex h-10 flex-col  transition group-hover:-translate-y-full">
            <span className="h-10 text-2xl leading-10">Work</span>

            <span className="h-10 text-2xl leading-10" aria-hidden="true">
              Work
            </span>
          </span>

          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 -rotate-90 transition group-hover:rotate-90"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="5" y1="12" x2="19" y2="12" />
              <line x1="5" y1="12" x2="11" y2="18" />
              <line x1="5" y1="12" x2="11" y2="6" />
            </svg>
          </span>
        </a>

        <section className="absolute left-20 w-full -translate-y-full bg-white transition group-hover:top-20 group-hover:translate-y-full">
          <ul>
            <li>
              <a href="#">Identity</a>
            </li>
            <li>
              <a href="#">UI/UX Design</a>
            </li>
            <li>
              <a href="#">Graphic Design</a>
            </li>
            <li>
              <a href="#">Frontend Dev</a>
            </li>
          </ul>
        </section>
      </nav>
    </div>
  );
}

export default AnimatedNavbar;
