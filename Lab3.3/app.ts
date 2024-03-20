const pokemon: number = 6;

async function callApi(url: string) {
  let data: Response = await fetch(url);
  return await data.json();
}

const APP: HTMLElement | null = document.getElementById('app');
let html: string = '';
const seenPokemon: Set<number> = new Set();

while (seenPokemon.size < pokemon * 2) {
  const randomId: number = Math.floor(Math.random() * 12) + 1;

  if (!seenPokemon.has(randomId)) {
    seenPokemon.add(randomId);

    const data1: Promise<any> = callApi(`https://pokeapi.co/api/v2/pokemon/${randomId}/`);
    const data2: Promise<any> = callApi(`https://pokeapi.co/api/v2/pokemon/${randomId}/`);

    Promise.all([data1, data2]).then(function (responses: any[]) {
      const response1: any = responses[0];
      const response2: any = responses[1];

      html += `   
        <div class="col-2">
          <div class="card shadow mb-3" onclick="changeColor(this)">
            <span class="position-absolute top-0">#${response1.id}</span>    
            <img src="${response1.sprites.front_default}" alt="${response1.name}">
          </div>
        </div>
        <div class="col-2">
          <div class="card shadow mb-3" onclick="changeColor(this)">
            <span class="position-absolute top-0">#${response2.id}</span>    
            <img src="${response2.sprites.front_default}" alt="${response2.name}">
          </div>
        </div>
      `;

      if (seenPokemon.size === pokemon * 2) {
        const pokemonArray: HTMLElement[] = Array.from(APP?.querySelectorAll('.col-2') || []);
        pokemonArray.sort(() => Math.random() - 0.5);
        pokemonArray.forEach((pokemonElement: HTMLElement) => {
            APP?.appendChild(pokemonElement);
          });
        APP?.innerHTML = html;
      }
    });
  }
}