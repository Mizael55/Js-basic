


export let numbers = [1,2,3,4,5];
console.log('hello world');

for (let i = 0; i <= 5; i++) {
    let line = '';

    for (let j = i ; j <= 5; j = j++) {
      
        line += ' ' + (j * i);
        
    }
    console.log(line);
    
    
}

