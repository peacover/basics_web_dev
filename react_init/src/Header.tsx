import "./App.css";

interface headerProps {
  selectedTeam: string;
  teamMemberCount: number;
}
function Header({ selectedTeam, teamMemberCount }: headerProps) {
  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-6">
          <h3>
            {selectedTeam} has {teamMemberCount} Members
          </h3>
        </div>
      </div>
    </header>
  );
}

export default Header;
