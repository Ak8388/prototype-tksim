import { useParams } from "react-router-dom";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

// CSS
import "./ClassPage.css";

// Components
import Button from "../../components/Button/Button";

// Icons
import { AiFillBook } from "react-icons/ai";
import { BiTaskX } from "react-icons/bi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";

const ClassPage = () => {
  const { classId } = useParams();
  const [classes, setClasses] = useOutletContext();
  const [materiActive, setMateriActive] = useState(true);
  const [tugasActive, setTugasActive] = useState(false);
  const [orangActive, setOrangActive] = useState(false);

  return (
    <div className="classpage-wrapper">
      {classes.map(
        (c) =>
          c.id === classId && (
            <>
              <header>
                <Button
                  className={materiActive ? "isActive" : ""}
                  onClick={() => {
                    setMateriActive(true);
                    setTugasActive(false);
                    setOrangActive(false);
                  }}
                >
                  Materi
                </Button>
                <Button
                  className={tugasActive ? "isActive" : ""}
                  onClick={() => {
                    setTugasActive(true);
                    setMateriActive(false);
                    setOrangActive(false);
                  }}
                >
                  Tugas
                </Button>
                <Button
                  className={orangActive ? "isActive" : ""}
                  onClick={() => {
                    setOrangActive(true);
                    setMateriActive(false);
                    setTugasActive(false);
                  }}
                >
                  Orang
                </Button>
              </header>
              <main>
                <div className="title-wrapper">
                  <div className="title">
                    <h1>{c.name}</h1>
                    <p>{c.schedule}</p>
                  </div>
                </div>
                <div className="main-content">
                  {materiActive && (
                    <>
                      {c.materials.map((cm) => (
                        <Button>
                          <AiFillBook size={24} />
                          {c.teacher} memposting materi: {cm.name}
                        </Button>
                      ))}
                    </>
                  )}
                  {tugasActive && (
                    <>
                      {c.tasks.map((ct) => (
                        <Button>
                          <BiTaskX size={24} />
                          {c.teacher} memposting tugas: {ct.name}
                        </Button>
                      ))}
                    </>
                  )}
                  {orangActive && (
                    <>
                      <h1>Pengajar</h1>
                      <p>
                        <FaChalkboardTeacher size={24} />
                        {c.teacher}
                      </p>
                      <h1>Anggota Kelas</h1>
                      {c.students.map((cs) => (
                        <p>
                          <PiStudent size={24} />
                          {cs.name}
                        </p>
                      ))}
                    </>
                  )}
                </div>
              </main>
            </>
          )
      )}
    </div>
  );
};

export default ClassPage;
