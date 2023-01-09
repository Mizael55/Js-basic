


export let numbers = [1,6,8,4,2,7,10,3,5];

let counter = 0;

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];

    if(element > counter){
        counter = element;
    }
  
}

console.log('el mayor es: ', counter);