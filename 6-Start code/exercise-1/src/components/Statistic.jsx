export default function Statistic(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Average</th>
          <th>Min</th>
          <th>Max</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.average}</td>
          <td>{props.min}</td>
          <td>{props.max}</td>
        </tr>
      </tbody>
    </table>
  );
}
