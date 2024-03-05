// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');

for(let i = 1; i < 100; i++) {
    setTimeout(() => {
        const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
        const pokemon = document.createElement('div');
        const newImg = document.createElement('img');
        const pokemonNum = document.createElement('span');
        pokemon.classList.add('pokemon');
        pokemonNum.innerText = `#${i}`;
        newImg.src = `${baseURL}${i}.png`;

        pokemon.appendChild(newImg);
        pokemon.appendChild(pokemonNum);
        container.appendChild(pokemon);
    }, 5000);
}

