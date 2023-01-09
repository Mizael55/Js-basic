
export let person = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'],
    isActive: true,

    toString() {
        let object = `Name: ${this.name},
         Age: ${this.age}, 
         Hobbies: ${this.hobbies}, 
         Role: ${this.role}, 
         Active: ${this.isActive}`;

         console.log(object);
    }
}

// person.toString();

let car = {
    name: 'BMW',
    model: 'X5',
    color: 'Black',
    year: 2015,
}
    
let smartTv = {
    name: 'Samsung',
    model: 'QLED',
    color: 'Black',
    year: 2019,
}

let youTubeVideo = {
    name: 'How to learn TypeScript',
    views: 100000,
    likes: 10000,
    dislikes: 100,
    comments: ['Nice video', 'Good job'],
    published: '2020-01-01',

}


console.log(car);
console.log(smartTv);
console.log(youTubeVideo);
   
    



