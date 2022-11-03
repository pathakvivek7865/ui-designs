import React from "react";

function DesignCredit({ sourceLink = "#" }: { sourceLink: string }) {
  return (
    <div className="mt-4 text-sm">
      Inspired From{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={sourceLink}
        className="text-blue-500 "
      >
        here
      </a>
    </div>
  );
}

export default DesignCredit;
