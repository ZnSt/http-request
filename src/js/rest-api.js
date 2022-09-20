import pokemonCardTpl from '../templates/pokemon-cards.hbs';
import Notiflix from 'notiflix';

const refs = {
  cardContainer: document.querySelector('.js-articles'),
  searchForm: document.querySelector('.js-search-form'),
};

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const searchQuery = form.elements.query.value;
  fetchPokemon(searchQuery)
    .then(renderPokemonCard)
    .catch(onfetchError)
    .finally(() => form.reset());
}

function fetchPokemon(pokemonId) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(
    response => {
      return response.json();
    }
  );
}

function renderPokemonCard(pokemon) {
  const markup = pokemonCardTpl(pokemon);
  refs.cardContainer.insertAdjacentHTML('beforeend', markup);
}

function onfetchError() {
  Notiflix.Notify.failure('Упс, покемон потерялся!');
}

// ================================================================================

const url = 'https://newsapi.org/v2/everything?q=cars';
const options = {
  headers: {
    'X-Api-Key': '3c26f51b8e414a56927cf275d2f0a01e',
  },
};
fetch(url, options)
  .then(r => r.json())
  .then(console.log);
