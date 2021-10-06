export default function ReportTable(props) {
  console.log("hours props", props.hours);
  return (
    <table className="mx-auto border-2 border-green-600 bg-green-300 min-w-full rounded-lg">
      <tr>
        <th>Location</th>
        {props.hours.map((hour) => {
          return <th>{hour}</th>;
        })}
        <th>Total</th>
      </tr>
      <tr>
        <td className="text-center border border-black-300 bg-gray-50">x</td>
        <td className="text-center border border-black-300 bg-gray-50">x</td>
        <td className="text-center border border-black-300 bg-gray-50">x</td>
      </tr>
    </table>
  );
}
