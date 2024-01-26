export const generateAgentId = (employmentYear: string) =>{
"BA" + Math.random() + employmentYear.slice(-2);
}