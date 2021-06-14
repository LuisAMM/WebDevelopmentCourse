// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for(let i = 1; i < 152; i++){
    const pokemon = document.createElement('div');
    const label = document.createElement('span');
    const newImg = document.createElement('img');
    
    label.innerText = `#${i}`;
    newImg.src = `${baseURL}${i}.png`;
    pokemon.classList.add('pokemon')

    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    
    container.appendChild(pokemon);
}