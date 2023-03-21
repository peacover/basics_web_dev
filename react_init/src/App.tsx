import { useEffect, useState } from "react";
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Context from "./Context";
import Employees from "./Employees";
import Footer from "./Footer";
import GroupedTeamMembers from "./GroupedTeamMembers";
import Header from "./Header";
import { Employee } from "./model";

function App() {
  const [selectedTeam, setSelectedTeam] = useState<string>(
    JSON.parse(localStorage.getItem("selectedTeam") as string) || "TeamC"
  );
  const [employees, setEmployees] = useState<Employee[]>(
    JSON.parse(localStorage.getItem("employeesList") as string) || [
      {
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA",
      },
      {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB",
      },
      {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC",
      },
      {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD",
      },
    ]
  );

  function handleTeamSelectionChange(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    setSelectedTeam(event.target.value);
    // setEmployees(employees.filter((employee) => employee.teamName === event.target.value));
  }
  function handleEmployeeCardClick(event: React.MouseEvent<HTMLDivElement>) {
    const transformedEmployees: Employee[] = employees.map(
      (employee: Employee) => {
        if (employee.id === parseInt(event.currentTarget.id)) {
          if (employee.teamName === selectedTeam) employee.teamName = "";
          else employee.teamName = selectedTeam;
        }
        return employee;
      }
    );

    // const transformedEmployees: Employee[] = employees.map((employee) =>
    //   employee.id === parseInt(event.currentTarget.id)
    //     ? (employee.teamName === selectedTeam)
    //       ? { ...employee, teamName: "" }
    //       : { ...employee, teamName: selectedTeam }
    //     : employee
    // );
    setEmployees(transformedEmployees);
  }
  useEffect(() => {
    localStorage.setItem("employeesList", JSON.stringify(employees));
  }, [employees]);
  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
  }, [selectedTeam]);
  return (
    <Router>
      <Header
        selectedTeam={selectedTeam}
        teamMemberCount={
          employees.filter((employee) => employee.teamName === selectedTeam)
            .length
        }
      />
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <Employees
              employees={employees}
              selectedTeam={selectedTeam}
              handleEmployeeCardClick={handleEmployeeCardClick}
              handleTeamSelectionChange={handleTeamSelectionChange}
            />
          }
        ></Route>
        <Route
          path="/GroupedTeamMembers"
          element={
            <GroupedTeamMembers
              employees={employees}
              selectedTeam={selectedTeam}
              setSelectedTeam={setSelectedTeam}
            />
          }
        ></Route>
        <Route path="*" element={<h1>404 Not Found</h1>}></Route>
      </Routes>
      <Context />
      <Footer />
    </Router>
  );
}

export default App;
