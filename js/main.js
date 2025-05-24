import countries from './model/flags.js';

function criarBandeiraCard(pais) {
  const { id, name } = pais;

  return `
    <div class="flag col-2 my-2 text-center">
      <img 
        src="https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/${id}.svg" 
        alt="${name}" 
        style="height: 6rem; width: 6rem;">
      <p>${name}</p>
    </div>
  `;
}

const container = document.getElementById("flags-container");

const cards = countries.map(criarBandeiraCard).join('');

container.insertAdjacentHTML("beforeend", cards);