




let heroes: string[] = ['DeadPool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];

export function superHeroes(heroes:string[]){

    let counter = 0;
    let nombre = '';

    for (let i = 0; i < heroes.length; i++) {
        const element = heroes[i].length;

        if (element > counter) {
            counter = element;
            nombre = heroes[i];
        }
    }

    return nombre;
    
}


let hero = superHeroes(heroes);

console.log('el nombre mas grande es:', hero);