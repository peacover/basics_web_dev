export interface Employee{
    id: number,
    fullName: string,
    designation: string,
    gender: string,
    teamName?: string,
}

export interface ITeam{
    team: string,
    members: Employee[],
    collapsed: boolean
}