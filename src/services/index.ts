export const generateAgentId = (employmentYear: string) =>{
    const randValue = Math.floor(Math.random()*100)
 return `BA${employmentYear.slice(-2)}0${randValue}`;
}