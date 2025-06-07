import { NavLink } from "react-router-dom";
import "../styles/layout/_sideNav.scss";

const SideNavBar = () => {
  return (
    <nav className="side-nav">
      <ul>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/demands">Demandes</NavLink>
        </li>
        <li>
          <NavLink to="/tasks">Tâches</NavLink>
        </li>
        <li>
          <NavLink to="/reports">Rapports</NavLink>
        </li>
        <li>
          <NavLink to="/settings">Paramètres</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideNavBar;
