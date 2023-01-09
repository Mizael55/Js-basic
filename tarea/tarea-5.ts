


export let numbers = [1,6,8,4,2,7,10,3,5];

for (let i = 0; i < numbers.length; i++) {
    const value = numbers[i];

    if (value % 2 == 0) {
        console.log(value, "es par");
    }
    
}