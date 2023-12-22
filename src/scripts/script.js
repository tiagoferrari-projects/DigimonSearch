// 1. Chamar a nossa API de Digimons
async function getDigimons() {
  const response = await fetch(
    'https://digitalinnovationone.github.io/api-digimon/api/digimon.json',
  );
  return await response.json();
}

// 2. Filtro de Busca dos Digimons

async function filtroDigimons(digimonList, digimonId) {
  const digimon = await digimonList.find((monster) => monster.id === digimonId);
  return digimon;
}

// 3. Renderizador
async function renderDigimon(digimon) {
  const imgDigimonElement = document.getElementById('img__digimon');
  imgDigimonElement.src = digimon.image;

  const txtDigimonElement = document.getElementById('t-name__Digimon');
  txtDigimonElement.textContent = digimon.name;

  const hpDigimonElement = document.getElementById('hp_int');
  const atkDigimonElement = document.getElementById('atk_int');
  const defDigimonElement = document.getElementById('def_int');

  hpDigimonElement.style.width = digimon.HP + '%';
  atkDigimonElement.style.width = digimon.ATK + '%';
  defDigimonElement.style.width = digimon.DEF + '%';
}

// 4. Main
async function main() {
  const digimons = await getDigimons();

  const chooseDigimons = await filtroDigimons(digimons, 13);

  await renderDigimon(chooseDigimons);
}
main();
