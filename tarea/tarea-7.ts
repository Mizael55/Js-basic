


console.log('Hello World');

export function max(a:number, b:number, c:number){
    if (a > b && a > c) {
        return a; 
    }

    if (b > a && b > c) {
        return b;
        
    }

    return c;

}


let maxValue = max(10,14,16);

console.log('el numero mas alto es:', maxValue);