
export let employees:string[] = ['John', 'Paul', 'George'];
let salaries:number[] = [1500, 2400, 3200];



for (let i = 0; i < employees.length; i++) {

        if (salaries[i] < 2000) {
      console.log('Este salario es de:', employees[i], salaries[i]);
   }
        if (salaries[i] >= 2000 && salaries[i] < 3000) {
      console.log('Este salario es de:', employees[i], salaries[i]);
   }

        if (salaries[i] > 3000) {
      console.log('Este salario es de:', employees[i], salaries[i]);
   }
    
}
    
   
    
   
    



