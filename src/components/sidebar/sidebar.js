import { Link } from "react-router-dom";

import { FaRegUser } from "react-icons/fa";
import { FaRegFolder } from "react-icons/fa";

import "./sidebar.scss";

function Sidebar({ sidebarActive }) {
  const classValues = sidebarActive ? "c-sidebar active" : "c-sidebar";

  return (
    <aside className={classValues}>
      <Link to="/novo" className="c-button">
        Criar contato
      </Link>

      <Link to="/" className="c-sidebar__item">
        <FaRegUser />
        Contatos
      </Link>

      <div className="c-sidebar__item">
        <FaRegFolder />
        Grupos
      </div>
    </aside>
  );
}

export default Sidebar;
