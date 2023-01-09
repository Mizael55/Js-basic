


console.log('Hello World');

export let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 
'Captain Marvel']; 

function heroesThatStartsWith(heroes: string[], letter: string){
    let heroesWithLetter = [];

    for(let i = 0; i < heroes.length; i++){
        
        if(heroes[i].startsWith(letter)){
            heroesWithLetter.push(heroes[i]);
        }
    }
    return heroesWithLetter;
}




let herosWithLetterS = heroesThatStartsWith( heroes, 'C' );
console.log( herosWithLetterS ); // She Hulk, Spiderman