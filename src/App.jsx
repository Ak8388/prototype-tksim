import { useState } from "react";
import { Header } from "./components";
import { Outlet } from "react-router-dom";

const App = () => {
  const [classes, setClasses] = useState([
    {
      id: "001",
      name: "Math",
      schedule: "Morning",
      teacher: "Sir Alex",
      tasks: [
        {
          id: "101",
          name: "Counting",
          deadline: "27 June 2023",
        },
        {
          id: "102",
          name: "Multiplication",
          deadline: "30 June 2023",
        },
      ],
      materials: [
        {
          id: "201",
          name: "Multiplication Learning",
          attachment: "Multiplication Learning.pdf",
        },
        {
          id: "202",
          name: "Learning Calculations",
          attachment: "Learning Calculations.pdf",
        },
      ],
      students: [
        {
          id: "301",
          name: "Robert",
        },
        {
          id: "302",
          name: "Johnson",
        },
        {
          id: "303",
          name: "Bella",
        },
        {
          id: "304",
          name: "Lawra",
        },
      ],
    },
    {
      id: "002",
      name: "Science",
      schedule: "Afternoon",
      teacher: "Ms. Sandra",
      tasks: [
        {
          id: "101",
          name: "Calculate the Water Pressure",
          deadline: "27 June 2023",
        },
        {
          id: "102",
          name: "Checmical element equation",
          deadline: "30 June 2023",
        },
      ],
      materials: [
        {
          id: "201",
          name: "All Kinds of Pressure",
          attachment: "All Kinds of Pressure.pdf",
        },
        {
          id: "202",
          name: "Checmical Elements",
          attachment: "Checmical Elements.pdf",
        },
      ],
      students: [
        {
          id: "301",
          name: "Robert",
        },
        {
          id: "302",
          name: "Johnson",
        },
        {
          id: "303",
          name: "Bella",
        },
        {
          id: "304",
          name: "Lawra",
        },
      ],
    },
    {
      id: "003",
      name: "Science",
      schedule: "Afternoon",
      teacher: "Ms. Sandra",
      tasks: [
        {
          id: "101",
          name: "Calculate the Water Pressure",
          deadline: "27 June 2023",
        },
        {
          id: "102",
          name: "Checmical element equation",
          deadline: "30 June 2023",
        },
      ],
      materials: [
        {
          id: "201",
          name: "All Kinds of Pressure",
          attachment: "All Kinds of Pressure.pdf",
        },
        {
          id: "202",
          name: "Checmical Elements",
          attachment: "Checmical Elements.pdf",
        },
      ],
      students: [
        {
          id: "301",
          name: "Robert",
        },
        {
          id: "302",
          name: "Johnson",
        },
        {
          id: "303",
          name: "Bella",
        },
        {
          id: "304",
          name: "Lawra",
        },
      ],
    },
    {
      id: "004",
      name: "Science",
      schedule: "Afternoon",
      teacher: "Ms. Sandra",
      tasks: [
        {
          id: "101",
          name: "Calculate the Water Pressure",
          deadline: "27 June 2023",
        },
        {
          id: "102",
          name: "Checmical element equation",
          deadline: "30 June 2023",
        },
      ],
      materials: [
        {
          id: "201",
          name: "All Kinds of Pressure",
          attachment: "All Kinds of Pressure.pdf",
        },
        {
          id: "202",
          name: "Checmical Elements",
          attachment: "Checmical Elements.pdf",
        },
      ],
      students: [
        {
          id: "301",
          name: "Robert",
        },
        {
          id: "302",
          name: "Johnson",
        },
        {
          id: "303",
          name: "Bella",
        },
        {
          id: "304",
          name: "Lawra",
        },
      ],
    },
  ]);
  return (
    <div className="app-wrapper">
      <div className="header-wrapper">
        <Header classes={classes} />
      </div>
      <div className="content-wrapper">
        <Outlet context={[classes, setClasses]} />
      </div>
    </div>
  );
};

export default App;
