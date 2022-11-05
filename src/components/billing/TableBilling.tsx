import TableRowBilling from "./TableRowBilling";

export const TableBilling = () => {
  return (
    <table className="w-full table-auto">
      <thead className="text-xs font-medium text-billingSecondary">
        <tr className="">
          <th className="pl-4 text-start">Date</th>
          <th className="pl-4 text-start">Type</th>
          <th className="pl-4 text-start">Receipt</th>
        </tr>
      </thead>
      <tbody className="font-medium ">
        <TableRowBilling date="Oct. 21, 2021" type="Pro Annual" />
        <TableRowBilling date="Aug. 21, 2021" type="Pro Portfolio" />
        <TableRowBilling date="July. 21, 2021" type="Sponsored Post" />
        <TableRowBilling date="Jun. 21, 2021" type="Sponsored Post" />
      </tbody>
    </table>
  );
};
