import {Link} from "react-router-dom";
import "./sidebar.scss";

function Sidebar({ sidebarActive }) {
  const classValues = sidebarActive ? "c-sidebar active" : "c-sidebar";

  return (
    <aside className={classValues}>
      <Link to="/novo" className="c-button">
        Criar contato
      </Link>

      <Link to="/" className="c-sidebar__link">
        Contatos
      </Link>
    </aside>
  );
}

export default Sidebar;
