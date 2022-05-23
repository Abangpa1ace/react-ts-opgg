export const setMBTI = (list: TestSubmitList): TestCodes => {
  const obj = { I: 0, E: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
  list.forEach(r => obj[r.result]++)
  
  return `${obj.E > obj.I ? 'E' : 'I'}${obj.S > obj.N ? 'S' : 'N'}${obj.T > obj.F ? 'T' : 'F'}${obj.J > obj.P ? 'J' : 'P'}`
}