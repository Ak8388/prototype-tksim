import { useState } from "react";

// Icons
import { AiFillAccountBook, AiOutlineMenu, AiOutlinePlus } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

// CSS
import "./Header.css";

// Components
import Button from "../Button/Button";
import Sidebar from "../Sidebar/Sidebar";

const Header = ({ classes }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showAccount, setShowAccount] = useState(false);

  return (
    <>
      <header>
        <div className="logo">
          <Button title="Menu utama" onClick={() => setShowSidebar(true)}>
            <AiOutlineMenu size={20} />
          </Button>
          <h2>GeekTech Course</h2>
        </div>
        <div className="btn-wrapper">
          <Button title="Buat atau Gabung dengan kelas" onClick={() => setShowAdd(!showAdd)}>
            <AiOutlinePlus size={24} />
          </Button>
          <Button title="Akun anda" onClick={() => setShowAccount(!showAccount)}>
            <FaUserCircle size={24} />
          </Button>
        </div>
      </header>
      {showSidebar && (
        <Sidebar setShowSidebar={setShowSidebar} classes={classes} />
      )}
      {showAdd && (
        <div className="add-wrapper">
          <a href="">Gabung kelas</a>
          <a href="">Buat kelas</a>
        </div>
      )}
      {showAccount && (
        <div className="account-wrapper">
          <FaUserCircle size={64} />
          <h4>Student Name</h4>
          <p>userAccount@gmail.com</p>
        </div>
      )}
    </>
  );
};

export default Header;
