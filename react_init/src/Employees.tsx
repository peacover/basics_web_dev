import React from "react";
import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import { Employee } from "./model";

interface Props {
  employees: Employee[];
  selectedTeam: string;
  handleEmployeeCardClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleTeamSelectionChange: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

const Employees = ({
  employees,
  selectedTeam,
  handleEmployeeCardClick,
  handleTeamSelectionChange,
}: Props) => {
  return (
  <main className="container">
    <div className="row justify-content-center mt-3 mb-3">
      <div className="col-6">
        <select
          className="form-select form-select-lg"
          value={selectedTeam}
          onChange={handleTeamSelectionChange}
        >
          <option value="TeamA">TeamA</option>
          <option value="TeamB">TeamB</option>
          <option value="TeamC">TeamC</option>
          <option value="TeamD">TeamD</option>
        </select>
      </div>
    </div>
    <div className="row justify-content-center mt-3 mb-3">
      <div className="col-8">
        <div className="card-collection">
          {employees.map ((employee: Employee) => (
            <div
              id={employee.id.toString()}
              className={
                employee.teamName === selectedTeam
                  ? "card m-2 standout"
                  : "card m-2"
              }
              style={{ cursor: "pointer" }}
              onClick={handleEmployeeCardClick}
            >
              {employee.gender === "male" ? (
                <img src={maleProfile} className="card-img-top" alt="" />
              ) : (
                <img src={femaleProfile} className="card-img-top" alt="" />
              )}
              <div className="card-body">
                <h5 className="card-title">Full Name: {employee.fullName}</h5>
                <p className="card-text">
                  <b> Designation: </b>
                  {employee.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </main>)
};

export default Employees;
