// Icons
import {
  AiOutlineHome,
  AiOutlineClose,
  AiOutlineCalendar,
} from "react-icons/ai";

// Components
import Button from "../Button/Button";

// CSS
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = ({ setShowSidebar, classes }) => {
  const closeSidebar = () => {
    setShowSidebar(false)
  }

  return (
    <div className="sidebar-wrapper">
      <header>
        <div className="title-wrapper">
          <h3>Menu</h3>
          <Button onClick={closeSidebar}>
            <AiOutlineClose size={24} />
          </Button>
        </div>
        <NavLink to={"/"} onClick={closeSidebar}>
          <AiOutlineHome size={28} /> Kelas
        </NavLink>
        <NavLink to={"/calendar"} onClick={closeSidebar}>
          <AiOutlineCalendar size={28} /> Kalender
        </NavLink>
      </header>
      <main>
        {classes.map((c) => (
          <NavLink to={`/class/${c.id}`} onClick={closeSidebar}>
            <div className="icon">{c.name.slice(0, 1)}</div>
            <div className="detail">
              <h3>{c.name}</h3>
            </div>
          </NavLink>
        ))}
      </main>
      <footer></footer>
    </div>
  );
};

export default Sidebar;
