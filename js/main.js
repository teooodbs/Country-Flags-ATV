import countries from './model/flags.js';

function bandeira_card(countries) {
  return `
    <div class="flag col-2 my-2 text-center">
      <img src="https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/${countries.id}.svg" alt="${countries.name}" style="height: 6rem; width: 6rem;">
      <p>${countries.name}</p>
    </div>
  `;
}

document.getElementById("flags-container").insertAdjacentHTML(
  "beforeend",
  countries.map(countries => bandeira_card(countries)).join('')
);
