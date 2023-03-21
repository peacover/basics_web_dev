import { useState } from "react";
import { Employee, ITeam } from "./model";

interface Props {
  employees: Employee[];
  selectedTeam: string;
  setSelectedTeam: (team: string) => void;
}
const GroupedTeamMembers = ({
  employees,
  selectedTeam,
  setSelectedTeam,
}: Props) => {
  const [groupedEmployees, setGroupedEmployees] = useState<ITeam[]>(
    groupTeamMembers()
  );
  function groupTeamMembers(): ITeam[] {
    var teams: ITeam[] = [];

    var teamAMembers: Employee[] = employees.filter(
      (employee) => employee.teamName === "TeamA"
    );
    var teamA: ITeam = {
      team: "TeamA",
      members: teamAMembers,
      collapsed: selectedTeam === "TeamA" ? false : true,
    };
    teams.push(teamA);

    var teamBMembers: Employee[] = employees.filter(
      (employee) => employee.teamName === "TeamB"
    );
    var teamB: ITeam = {
      team: "TeamB",
      members: teamBMembers,
      collapsed: selectedTeam === "TeamB" ? false : true,
    };
    teams.push(teamB);

    var teamCMembers: Employee[] = employees.filter(
      (employee) => employee.teamName === "TeamC"
    );
    var teamC: ITeam = {
      team: "TeamC",
      members: teamCMembers,
      collapsed: selectedTeam === "TeamC" ? false : true,
    };
    teams.push(teamC);

    var teamDMembers: Employee[] = employees.filter(
      (employee) => employee.teamName === "TeamD"
    );
    var teamD: ITeam = {
      team: "TeamD",
      members: teamDMembers,
      collapsed: selectedTeam === "TeamD" ? false : true,
    };
    teams.push(teamD);

    return teams;
  }
  function handleTeamClic(event: React.MouseEvent<HTMLHeadingElement>){
    var groupedTeamClicked = groupedEmployees.map((groupedTeam : ITeam) => groupedTeam.team === event.currentTarget.id ? 
      {...groupedTeam, collapsed: !groupedTeam.collapsed} : groupedTeam);
    setGroupedEmployees(groupedTeamClicked);
    setSelectedTeam(event.currentTarget.id);
  }
  return (
    <main className="container">
      {groupedEmployees.map((item: ITeam) => {
        return (
          <div
            key={item.team}
            className="card mt-2"
            style={{ cursor: "pointer" }}
          >
            <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClic}>
              Team Name: {item.team}
            </h4>
            <div className={item.collapsed === true ? "collapse" : ""}>
              <hr />
              {item.members.map((member: Employee) => {
                return (
                  <div className="mt-2">
                    <h5 className="card-title mt-2">
                      <span className="text-dark">
                        Full Name: {member.fullName}
                      </span>
                    </h5>
                    <p>Designation: {member.designation}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default GroupedTeamMembers;
