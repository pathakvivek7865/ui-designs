import React from "react";

function TableRowBilling({
  date = "",
  type = "",
}: {
  date: string;
  type: string;
}) {
  return (
    <tr className="text-start hover:rounded-md hover:shadow-billingTableRowShadow">
      <td className="py-6 pl-4">{date}</td>
      <td className="pl-4">{type}</td>
      <td className="pl-4">
        <button className="rounded-md border  border-billingBg px-4 py-2">
          Download
        </button>
      </td>
    </tr>
  );
}

export default TableRowBilling;
