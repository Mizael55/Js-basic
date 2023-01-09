
interface Person {
    name: string;
    age: number;
    isActive: boolean;
}



export let fernando: Person = {
    name: 'Fernando',
    age: 32,
    isActive: true,
}

let melissa: Person = {
    name: 'Fernando',
    age: 52,
    isActive: true,
}

let juan: Person = {
    name: 'Fernando',
    age: 42,
    isActive: true,
}


let people = [fernando, melissa, juan];

for (let i = 0; i < people.length; i++) {
    const element = people[i];
    console.log(element.name , ' ', element.age );
    
}