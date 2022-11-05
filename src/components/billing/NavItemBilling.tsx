
export default function NavItemBilling({
  icon: Icon,
  title = "-",
}: {
  icon: JSX.Element;
  title: string;
}) {

    
  return (
    <div
      className={`flex w-full cursor-pointer  items-center rounded-md  hover:text-billingPrimary  ${
        title === "Billing" ? "text-billingPrimary font-medium" : "text-billingSecondary"
      }`}
    >
      <div
        className={`h-full w-1.5 ${
          title === "Billing" ? "bg-billingAccent" : "bg-transparent"
        } rounded-full`}
      ></div>
      <div className="mx-4 flex items-center gap-2 py-3">
        {Icon}
        <p>{title}</p>
      </div>
    </div>
  );
}
