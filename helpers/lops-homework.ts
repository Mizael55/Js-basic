

export function multiplyTable(base:number = 5, limit:number  = 10){

    if (limit <= 0) {
        throw new Error("Limit must be greater than 0"); 
    }
    
    for (let i = 0; i < limit; i++) {
        console.log(base, "x", i, "=", base * i);
    }
}