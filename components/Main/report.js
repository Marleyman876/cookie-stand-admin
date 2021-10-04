export default function ReportTable(){
  return(
    <table className="mx-auto border-2 border-green-600 bg-green-300 min-w-full rounded-lg">
    <tr>
      <th>Maximum Customers per Hour</th>
      <th>Minimum Customers per Hour</th>
      <th>Average Cookies each Sale</th>
    </tr>
    <tr>
      <td className="text-center border border-black-300 bg-gray-50">x</td>
      <td className="text-center border border-black-300 bg-gray-50">x</td>
      <td className="text-center border border-black-300 bg-gray-50">x</td>
    </tr>
    </table>
  )
}