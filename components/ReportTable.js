export default function ReportTable(props) {
  return (
    <table className="mx-auto border-2 border-green-600 bg-green-300 min-w-full rounded-lg">
      <thead>
        <th>Location</th>
        {props.hours.map((hour) => {
          return <th key={Math.random()}>{hour}</th>;
        })}
        <th>Total</th>
      </thead>
      <tbody>
        {props.reports.map((store) => {
          return (
            <tr className="odd:bg-gray-500" key={Math.random()}>
              <td>{store.location}</td>
              {store.hourly_sale.map((sale) => {
                return <td>{sale}</td>;
              })}
              <td>
                {store.hourly_sale.reduce((acc, cur) => {
                  return acc + cur;
                }, 0)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
