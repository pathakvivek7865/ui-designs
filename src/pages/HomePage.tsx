import { Link } from "react-router-dom";

function HomePage() {
  const designs = [
    {
      title: "Credit Card",
      imgSrc: "/screenshots/credit-card.png",
      url: "components/credit-card",
      author: "pathakvivek7865",
      date: "2022-10-25",
    },
    {
      title: "Login",
      imgSrc: "/screenshots/login.png",
      url: "components/login",
      author: "pathakvivek7865",
      date: "2022-10-25",
    },
    {
      title: "Profile Page Header",
      imgSrc: "/screenshots/profile-page-header.png",
      url: "components/profile-page-header",
      author: "pathakvivek7865",
      date: "2022-10-25",
    },
    {
      title: "Price Card",
      imgSrc: "/screenshots/price-card.png",
      url: "components/price-card",
      author: "pathakvivek7865",
      date: "2022-10-25",
    },
    {
      title: "Enter Password",
      imgSrc: "/screenshots/enter-password.png",
      url: "components/enter-password",
      author: "pathakvivek7865",
      date: "2022-11-03",
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-slate-50 font-poppins">
        <div className="mx-auto w-full max-w-6xl">
          {/* UI Design Showcase */}
          <div className="flex flex-col py-16">
            <h3 className="px-4 text-4xl font-semibold lg:px-0 ">UI Designs</h3>
            <div className="my-16 grid w-full grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-3 lg:px-0">
              {/* card */}
              {designs.map((design) => (
                <Link key={design.url} to={`${design.url}`}>
                  <div className="flex aspect-[1.6]   flex-col items-center overflow-hidden rounded-2xl border border-slate-900 border-opacity-10 bg-white shadow-priceCardTopCircle">
                    <div className="flex-2 flex h-full w-full items-center justify-center overflow-hidden bg-white">
                      <img
                        className="h-full w-full object-cover"
                        src={design?.imgSrc ?? "/icons/image.svg"}
                      />
                    </div>
                    <div className="flex-1 py-4">
                      <p className="font-medium">{design?.title ?? ""}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer className="grid grid-flow-row items-center justify-between bg-gray-800 p-8 text-white  md:grid-flow-col">
        <a
          className="flex items-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/pathakvivek7865/ui-designs"
        >
          <p>Source Code</p>
          <img
            className="h-8 w-8 rounded-full bg-white p-1"
            src="/icons/github.svg"
          />
        </a>

        <a className="bg-transparent" href="https://www.vivekpathak.com.np/"
         target={"_blank"}>
          <p className="mt-2 text-sm text-slate-400">
            Made by <span className="text-white">Vivek Pathak</span> with
            &hearts;
          </p>
        </a>
      </footer>
    </>
  );
}

export default HomePage;
