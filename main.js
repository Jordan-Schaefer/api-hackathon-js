//Rick and Morty Planets
$.ajax({
  method: "GET",
  url: "https://rickandmortyapi.com/api/location/",
  success: rickAndMortyPlanetImage,
  error: errorMsg
})

// SpaceX Capsules
$.ajax({
  method: "GET",
  url: "https://api.spacexdata.com/v3/capsules",
  success: spaceXCapsules,
  error: errorMsg
})

//Rick and Morty Characters
$.ajax({
  mathod: "GET",
  url: "https://rickandmortyapi.com/api/character/",
  success: rickAndMortyCharacterImage,
  error: errorMsg
})


const rickAndMorthyPlanets = [
  "images/c137.png",
  "images/abadangoCluster.PNG",
  "images/citadelOfRicks.png",
  "images/worldendersLayer.jpg",
  "images/anatomyPark.jpg",
  "images/interdimensionalCable.jpg",
  "images/immortalityFieldResort.png",
  "images/postApocolipticEarth.jpg",
  "images/purgePlanet.jpg",
  "images/venzenulon.png",
  "images/bepis.jpg",
  "images/cronenbergEarth.jpg",
  "images/Nuptia4.png",
  "images/giantsTown.png",
  "images/birdWorld.png",
  "images/noopsHospital.png",
  "images/earth5-126.png",
  "images/mr.goldenfold.jpg",
  "images/gromflomPrime.jpg",
  "images/earthReplacement.jpg"
];

const spaceXShips = [
  "images/cap101.jpg",
  "images/cap102.jpg",
  "images/cap103.jpg",
  "images/cap104.png",
  "images/cap105.jpg",
  "images/cap106.jpg",
  "images/cap107.jpg",
  "images/cap108.jpg",
  "images/cap109.jpg",
  "images/cap110.jpg",
  "images/cap111.jpg",
  "images/cap112.jpg",
  "images/cap113.jpg",
  "images/cap201.jpg",
  "images/cap205.jpg",
  "images/cap202.jpg",
  "images/cap203.jpg",
  "images/cap204.jpg",
  "images/cap206.jpg"
];

const spaceXshipsObj = {
  'C101': "images/cap101.jpg",
  'C102': "images/cap102.jpg",
  'C103': "images/cap103.jpg",
  'C104': "images/cap104.png",
  'C105': "images/cap105.jpg",
  'C106': "images/cap106.jpg",
  'C107': "images/cap107.jpg",
  'C108': "images/cap108.jpg",
  'C109': "images/cap109.jpg",
  'C110': "images/cap110.jpg",
  'C111': "images/cap111.jpg",
  'C112': "images/cap112.jpg",
  'C113': "images/cap113.jpg",
  'C201': "images/cap201.jpg",
  'C205': "images/cap205.jpg",
  'C202': "images/cap202.jpg",
  'C203': "images/cap203.jpg",
  'C204': "images/cap204.jpg",
  'C206': "images/cap206.jpg"
}

const win = [
  "https://giphy.com/embed/QxNUlSv1uQvEFRiTmi",
  "https://giphy.com/embed/LQjqYNrXB0fDy",
  "https://giphy.com/embed/1USKMDPjuH4ovL7J5h",
  "https://giphy.com/embed/YRiRZGlioGVLAwo86B",
  "https://giphy.com/embed/26gZ1Ye2gkRUxtj9u"
]

const lose = [
  "https://giphy.com/embed/l41K3kXwW1YTdolsQ",
  "https://giphy.com/embed/h8VEOlDyRLTQo8cCtB",
  "https://giphy.com/embed/ayQ99hp01HFN6",
  "https://giphy.com/embed/3o7aCYqbC8uCdhcgG4"
]

const travel = [
  "https://giphy.com/embed/3o85xuRNcQRoe81z56",
  "https://giphy.com/embed/SYpCPn7WKoaVpFOzFi",
  "https://giphy.com/embed/emNRpeFXylj86et3jw",
  "https://giphy.com/embed/3ohs4rclkSSrNGSlFK",
  "https://giphy.com/embed/26DMXCypYxHVNydMc",
  "https://giphy.com/embed/b85mPT4Usz7fq"
]

const crash = [
  "https://giphy.com/embed/KDcGQnsMvmEKo3ItUs",
  "https://giphy.com/embed/YTY2sdc9vw38JMfpC6",
]

function errorMsg(error) {
  console.error(error);
}

function rickAndMortyPlanetImage(data) {
  const container = document.querySelector("#planets");
  container.classList.add("hidden");
  for (let i = 0; i < data.results.length; i++) {
    const innerContainer = document.createElement("div");
    const h1 = document.createElement("h1");
    const newImage = document.createElement("img");
    const ul = document.createElement("ul");
    const liType = document.createElement("li");
    const liDimension = document.createElement("li");
    const liResidents = document.createElement("li");
    const button = document.createElement("button");
    button.addEventListener('click', () => onSelectLocation(data.results[i].id))

    h1.textContent = data.results[i].name;
    var imageResult = rickAndMorthyPlanets[i];
    liType.textContent = "Type: " + data.results[i].type;
    liDimension.textContent = "Dimension: " + data.results[i].dimension;
    liResidents.textContent = "Known Residents: " + data.results[i].residents.length;
    button.textContent = "Select";

    innerContainer.setAttribute("class", "inner-container");
    h1.setAttribute("class", "title");
    newImage.setAttribute("src", imageResult);
    newImage.setAttribute("class", "image");
    liType.setAttribute("class", "list");
    liDimension.setAttribute("class", "list");
    liResidents.setAttribute("class", "list");
    button.setAttribute("class", "btn locationButton");
    button.setAttribute("id", i);

    innerContainer.appendChild(h1);
    innerContainer.appendChild(newImage);
    ul.appendChild(liType);
    ul.appendChild(liDimension);
    ul.appendChild(liResidents);
    innerContainer.appendChild(ul);
    innerContainer.appendChild(button);

    container.appendChild(innerContainer);
  }
}

function spaceXCapsules(data) {
  const container = document.getElementById("capsules");
  for (let i = 0; i < data.length; i++) {
    const innerContainer = document.createElement("div");
    const h1 = document.createElement("h1");
    const image = document.createElement("img");
    const ul = document.createElement("ul");
    const liCapsule = document.createElement("li");
    const liStatus = document.createElement("li");
    const liMissions = document.createElement("li");
    const button = document.createElement("button");
    button.addEventListener('click', () => onSelectShips(data[i].capsule_serial))

    h1.textContent = data[i].capsule_serial;
    var imageResult = spaceXShips[i];
    liCapsule.textContent = "Capsule: " + data[i].capsule_id;
    liStatus.textContent = "Status: " + data[i].status;
    liMissions.textContent = "Missions: " + data[i].missions.length;
    button.textContent = "Select";

    container.classList.add("hidden");
    innerContainer.setAttribute("class", "inner-container");
    h1.setAttribute("class", "title");
    image.setAttribute("src", imageResult);
    image.setAttribute("class", "image");
    liCapsule.setAttribute("class", "list");
    liStatus.setAttribute("class", "list");
    liMissions.setAttribute("class", "list");
    button.setAttribute("class", "btn");
    button.setAttribute("id", data[i].capsule_serial);

    innerContainer.appendChild(h1);
    innerContainer.appendChild(image);
    ul.appendChild(liCapsule);
    ul.appendChild(liStatus);
    ul.appendChild(liMissions);
    innerContainer.appendChild(ul);
    innerContainer.appendChild(button);
    container.appendChild(innerContainer);
  }
}

function rickAndMortyCharacterImage(data) {
  const container = document.getElementById("characters");
  for (let i = 0; i < data.results.length; i++) {
    const innerContainer = document.createElement("div");
    const h1 = document.createElement("h1");
    const img = document.createElement("img");
    const ul = document.createElement("ul");
    const liStatus = document.createElement("li");
    const liSpecies = document.createElement("li");
    const liLocation = document.createElement("li");
    const button = document.createElement("button");
    button.addEventListener('click', () => onSelectCharacter(data.results[i].id))

    h1.textContent = data.results[i].name;
    const imgResult = data.results[i].image;
    liStatus.textContent = "Status: " + data.results[i].status;
    liSpecies.textContent = "Species: " + data.results[i].species;
    liLocation.textContent = "Location: " + data.results[i].location.name;
    button.textContent = "Select";

    container.classList.add("hidden");
    innerContainer.setAttribute("class", "inner-container");
    h1.setAttribute("class", "title");
    img.setAttribute("src", imgResult);
    img.setAttribute("class", "image");
    liStatus.setAttribute("class", "list");
    liSpecies.setAttribute("class", "list");
    liLocation.setAttribute("class", "list");
    button.setAttribute("class", "btn");
    button.setAttribute("id", i);

    innerContainer.appendChild(h1);
    innerContainer.appendChild(img);
    ul.appendChild(liStatus);
    ul.appendChild(liSpecies);
    ul.appendChild(liLocation);
    innerContainer.appendChild(ul);
    innerContainer.appendChild(button);
    container.appendChild(innerContainer);

  }
}

function handleIntro() {
  const introModal = document.querySelector(".intro-modal");
  introModal.classList.add("hidden");
  const planets = document.getElementById("planets");
  planets.classList.remove("hidden");
}

function handlers() {
  const introButton = document.getElementById("introModal");
  introButton.addEventListener("click", handleIntro);
}

function onSelectLocation(data) {
  document.documentElement.scrollTop = 0;
  const planets = document.getElementById("planets");
  planets.classList.add("hidden");
  const ships = document.getElementById("capsules");
  ships.classList.remove("hidden");
  $.ajax({
    method: "GET",
    url: "https://rickandmortyapi.com/api/location/" + data,
    success: locationSelect,
    error: errorMsg
  })
}

function locationSelect(data) {
  const selectLocation = document.querySelector("#picks");
  const innerContainer = document.createElement("div");
  const h1 = document.createElement("h1");
  const img = document.createElement("img");
  const ul = document.createElement("ul");
  const liType = document.createElement("li");
  const liDimension = document.createElement("li");
  const liResidents = document.createElement("li");

  innerContainer.classList.add("inner-container");
  h1.classList.add("title");
  img.setAttribute("src", rickAndMorthyPlanets[data.id - 1]);
  img.classList.add("image")
  liType.classList.add("list");
  liDimension.classList.add("list");
  liResidents.classList.add("list");
  liResidents.setAttribute('id', 'location-residents');
  liType.setAttribute('id', 'planet-type');

  h1.textContent = data.name;
  liType.textContent = data.type;
  liDimension.textContent = data.dimension;
  liResidents.textContent = data.residents.length;

  innerContainer.appendChild(h1);
  innerContainer.appendChild(img);
  ul.appendChild(liType);
  ul.appendChild(liDimension);
  ul.appendChild(liResidents);
  innerContainer.appendChild(ul);
  selectLocation.appendChild(innerContainer);
}

function onSelectShips(data) {
  document.documentElement.scrollTop = 0;
  const capsules = document.getElementById("capsules");
  capsules.classList.add("hidden");
  const characters = document.getElementById("characters");
  characters.classList.remove("hidden");
  $.ajax({
    method: "GET",
    url: "https://api.spacexdata.com/v3/capsules/" + data,
    success: shipSelect,
    error: errorMsg
  })
}

function shipSelect(data) {
  let image = data.capsule_serial;
  for (const keys in spaceXshipsObj) {
    if (keys === image) {
      image = spaceXshipsObj[keys];
    }
  }
  const selectShip = document.querySelector('#picks');
  const innerContainer = document.createElement('div');
  const h1 = document.createElement('h1');
  const img = document.createElement('img');
  const ul = document.createElement('ul');
  const liCapsule = document.createElement("li");
  const liStatus = document.createElement("li");
  const liMissions = document.createElement("li");

  innerContainer.classList.add('inner-container');
  h1.classList.add('title');
  img.setAttribute('src', image);
  img.classList.add('image');
  liCapsule.classList.add('list');
  liStatus.classList.add('list');
  liMissions.classList.add('list');
  liMissions.setAttribute('id', 'ship-missions');
  liStatus.setAttribute('id', 'ship-status')

  h1.textContent = data.capsule_serial;
  liCapsule.textContent = data.capsule_id;
  liStatus.textContent = data.status;
  liMissions.textContent = data.missions.length

  innerContainer.appendChild(h1);
  innerContainer.appendChild(img);
  ul.appendChild(liCapsule);
  ul.appendChild(liStatus);
  ul.appendChild(liMissions);
  innerContainer.appendChild(ul);
  selectShip.appendChild(innerContainer);
}

function onSelectCharacter(data) {
  document.documentElement.scrollTop = 0;
  $.ajax({
    method: "GET",
    url: "https://rickandmortyapi.com/api/character/" + data,
    success: characterSelect,
    error: errorMsg
  })
}

function characterSelect(data) {
  const selectCharacter = document.querySelector("#picks");
  const innerContainer = document.createElement("div");
  const h1 = document.createElement("h1");
  const img = document.createElement("img");
  const ul = document.createElement("ul");
  const liStatus = document.createElement("li");
  const liSpecies = document.createElement("li");
  const liLocation = document.createElement("li");

  innerContainer.classList.add("inner-container");
  h1.classList.add("title");
  img.setAttribute("src", data.image);
  img.classList.add("image")
  liStatus.classList.add("list");
  liSpecies.classList.add("list");
  liLocation.classList.add("list");
  liStatus.setAttribute('id', 'character-status');
  liSpecies.setAttribute('id', 'species');

  h1.textContent = data.name;
  liStatus.textContent = data.status;
  liSpecies.textContent = data.species;
  liLocation.textContent = data.location.name;

  innerContainer.appendChild(h1);
  innerContainer.appendChild(img);
  ul.appendChild(liStatus);
  ul.appendChild(liSpecies);
  ul.appendChild(liLocation);
  innerContainer.appendChild(ul);
  selectCharacter.appendChild(innerContainer);

  handleGoal();
}

function handleGoal(){
  const location = parseInt(document.querySelector('#location-residents').textContent);
  const ship = parseInt(document.querySelector('#ship-missions').textContent);
  const character = document.querySelector('#character-status').textContent;
  const type = document.querySelector('#planet-type').textContent;
  const status = document.querySelector('#ship-status').textContent;
  const species = document.querySelector('#species').textContent;
  document.querySelector('#characters').classList.add('hidden')

  let points = 0;

  if (location <= 5) {
    points += 20;
  } else if (location <= 15) {
    points += 15;
  } else if (location <= 60) {
    points += 5;
  }

  if (type === 'Planet') {
    points += 5;
  } else if (type === 'Cluster') {
    points += 7;
  } else if (type === 'Replacement Dimension') {
    points += 12;
  } else if (type === 'Microverse') {
    points += 14;
  } else if (type === 'TV') {
    points += 17;
  }

  if (ship === 0){
    points += 10
  } else if (ship === 1){
    points += 5;
  } else if (ship === 2){
    points += 3;
  } else if (ship === 3){
    points += 1;
  }

  if (status === 'active') {
    points += 10;
  } else if (status === 'retired') {
    points += 4;
  } else if (status === 'unknown') {
    points += 3;
  } else if (status === 'destroyed') {
    points += 1;
  }

  if (character === 'Alive') {
    points += 15;
  } else if (character === 'unknown') {
    points += 5;
  } else if (character === 'Dead') {
    points += 1;
  }

  if (species === 'Human') {
    points += 7;
  } else if (species === 'Alien') {
    points += 17;
  }
  displayTravel(points);
}

function displayTravel(points){
  const travelContainer = document.querySelector('#travel');
  const travelModalRandom = Math.floor(Math.random() * 5);
  const travelModal = document.createElement('iframe');
  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = 'We have lift off!';
  travelModal.setAttribute('src', travel[travelModalRandom]);
  travelModal.classList.add('no-point', 'giphy');
  travelContainer.appendChild(title);
  travelContainer.appendChild(travelModal);
  travelContainer.classList.remove('hidden');

  setTimeout(() => {
    travelContainer.classList.add('hidden');
    displayFinish(points);
  }, 4500)
}

function displayFinish(points){
  const finish = document.querySelector('#finish');
  const title = document.createElement('h1');
  const restart = document.createElement('button');
  title.classList.add('title');
  restart.textContent = 'Try Again?';
  restart.classList.add('btn');
  restart.addEventListener('click', () => location.reload());

  const random = Math.floor(Math.random() * 60);
  const winOrLose = document.createElement('iframe');
  winOrLose.classList.add('no-point');
  if (points < 25) {
    title.textContent = "Wow, poor choices! Looks like you'r ship crashed!";
    const number = Math.floor(Math.random() * 2)
    winOrLose.setAttribute('src', crash[number])
  } else if (random > points) {
    title.textContent = 'Great job! Planet destroyed!';
    const number = Math.floor(Math.random() * 4);
    winOrLose.setAttribute('src', win[number]);
  } else if (random === points) {
    title.textContent = 'That was a close one but you pulled it off!';
    winOrLose.setAttribute('src', 'https://giphy.com/embed/yjI5G3pE3NH3O');
  } else if (random < points) {
    title.textContent = 'Oh boy, looks like you are making things hard on yourself. Better luck next time!';
    const number = Math.floor(Math.random() * 3);
    winOrLose.setAttribute('src', lose[number]);
  }
  finish.classList.remove('hidden');
  finish.appendChild(title);
  finish.appendChild(winOrLose);
  finish.appendChild(restart)
}
handlers();
