import { NavLink, Outlet } from 'react-router-dom';

const CyclesPage = () => {
  return (
    <>
      <p>cycles</p>
      <NavLink to="/cycles/add">Add cycle unit</NavLink>
      <NavLink to="/cycles/lastmonthreport">show last month report</NavLink>
      <NavLink to="/cycles/monthsreport">show months report</NavLink>
      <NavLink to="/">Back</NavLink>
      <Outlet />
    </>
  );
};

export default CyclesPage;
