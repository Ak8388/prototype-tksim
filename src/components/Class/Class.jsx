// Icons
import { AiFillEdit, AiFillDelete } from "react-icons/ai"

// Components
import Button from "../Button/Button";

// CSS
import './Class.css'

const Class = ({ id, name, schedule }) => {
  return (
    <div className="class-wrapper card">
      <div className="detail-wrapper">
        <h1>{name}</h1>
        <p>{schedule}</p>
      </div>
      <div className="action-wrapper">
        <Button><AiFillEdit size={21} /></Button>
        <Button><AiFillDelete size={21} /></Button>
      </div>
    </div>
  );
};

export default Class
