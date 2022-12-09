function DesignCredit({
  sourceLink = "#",
  textStyle = "mt-4 text-sm",
  linkStyle = "text-blue-500",
}: {
  sourceLink: string;
  textStyle?: string;
  linkStyle?: string;
}) {
  return (
    <div className={`${textStyle}`}>
      Inspired From{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={sourceLink}
        className={` ${linkStyle} `}
      >
        here
      </a>
    </div>
  );
}

export default DesignCredit;
