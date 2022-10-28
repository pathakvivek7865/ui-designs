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
  ];

  return (
    <main className="bg-slate-50 font-poppins">
      <div className="mx-auto w-full max-w-6xl">
        {/* UI Design Showcase */}
        <div className="py-16">
          <h3 className="text-4xl font-semibold ">UI Designs</h3>
          <div className="my-16 grid w-full grid-cols-3 gap-8">
            {/* card */}
            {designs.map((design) => (
              <Link key={design.url} to={`${design.url}`}>
                <div className="flex h-60 w-96 flex-col items-center overflow-hidden rounded-2xl border border-slate-900 border-opacity-10 bg-white shadow-priceCardTopCircle">
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
  );
}

export default HomePage;
