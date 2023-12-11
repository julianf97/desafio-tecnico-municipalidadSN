import './_adminHome.scss';
import './_table.scss';

export default function Table({ columns, data }) {
  return (
    <div className='contenedorTable'>
      <table className="table">
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column.accessor}>
                {column.Header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.id_user}>
              {columns.map(column => (
                <td key={`${row.id_user}-${column.accessor}`}>
                  {row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}