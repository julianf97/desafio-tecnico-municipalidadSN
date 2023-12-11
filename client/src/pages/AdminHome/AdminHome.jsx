import Navbar from '../../components/Navbar/Navbar';
import './_adminHome.scss';
import './_table.scss';
import Table from './Table';
import { bienvenidoAdministrador } from '../../constants/homeConstants';
import { arrayColumns } from './arrayColumns';
import useFetchUsers from '../../hooks/useFetchUsers';

export default function AdminHome() {
  const { users, loading, error } = useFetchUsers();
  const columns = arrayColumns;

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }

  return (
    <div className='principalContainerAdminHome'>
      <Navbar />
      <h1>{bienvenidoAdministrador}</h1>
      <Table columns={columns} data={users} />
    </div>
  );
}
