//Rick and Morty Planets
const container = document.querySelector("#planets");

$.ajax({
  method: "GET",
  url: "https://rickandmortyapi.com/api/location/",
  success: rickAndMortyPlanetImage,
  error: errorMsg
})

$.ajax({
  method: "GET",
  url: "https://rickandmortyapi.com/api/location/",
  success: result,
  error: errorMsg
})

//Rick and Morty Characters Being Displayed in the Page with styling

$.ajax({
  mathod: "GET",
  url: "https://rickandmortyapi.com/api/character/",
  success: rickAndMortyCharacterImage,
  error: errorMsg
})

// Rick and Morty Characters

$.ajax({
  method: "GET",
  url: "https://rickandmortyapi.com/api/character/",
  success: result,
  error: errorMsg
})

// SpaceX Capsules

$.ajax({
  method: "GET",
  url: "https://api.spacexdata.com/v3/capsules",
  success: spaceXCapsules,
  error: errorMsg
})

// SpaceX Status

$.ajax({
  method: "GET",
  url: "https://api.spacexdata.com/v3/capsules",
  success: result,
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

// const win = [
//   'win-1',
//   'win-2',
//   'win-3',
//   'win-4',
//   'win-5'
// ];

const lose = [
  "https://giphy.com/embed/l41K3kXwW1YTdolsQ",
  "https://giphy.com/embed/h8VEOlDyRLTQo8cCtB",
  "https://giphy.com/embed/ayQ99hp01HFN6",
  "https://giphy.com/embed/3o7aCYqbC8uCdhcgG4"
]

// const lose = [
//   'lose-1',
//   'lose-2',
//   'lose-3',
//   'lose-4'
// ];

const travel = [
  "https://giphy.com/embed/3o85xuRNcQRoe81z56",
  "https://giphy.com/embed/SYpCPn7WKoaVpFOzFi",
  "https://giphy.com/embed/emNRpeFXylj86et3jw",
  "https://giphy.com/embed/3ohs4rclkSSrNGSlFK",
  "https://giphy.com/embed/26DMXCypYxHVNydMc",
  "https://giphy.com/embed/b85mPT4Usz7fq"
]

// const travel = [
//   'travel-1',
//   'travel-2',
//   'travel-3',
//   'travel-4',
//   'travel-5',
//   'travel-6'
// ];

const crash = [
  "https://giphy.com/embed/KDcGQnsMvmEKo3ItUs",
  "https://giphy.com/embed/YTY2sdc9vw38JMfpC6",

]

// const crash = [
//   'crash-1',
//   'crash-2'
// ];

function errorMsg(error) {
  console.error(error);
}

function result(data) {
  console.log(data);
}

function rickAndMortyPlanetImage(data) {

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
  const body = document.querySelector("body");
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
    body.appendChild(container);

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



function handleIntro(event) {

  const introModal = document.querySelector(".intro-modal");
  introModal.classList.add("hidden");

  const planets = document.getElementById("planets");
  planets.classList.remove("hidden");
}



function handleLocation(event) {
  const planets = document.getElementById("planets");
  planets.classList.add("hidden");

  const ships = document.getElementById("capsules");
  ships.classList.remove("hidden");
  onSelectLocation(event.target);
}


function handleShips(event) {
  const ships = document.getElementById("capsules");
  ships.classList.add("hidden");

  const characters = document.getElementById("characters");
  characters.classList.remove("hidden");

  onSelectShips(event.target);
}


function handleCharacters(event) {
  onSelectCharacter(event.target);
}


function handlers() {
  const introButton = document.getElementById("introModal");
  introButton.addEventListener("click", handleIntro);

  const planets = document.getElementById("planets");
  planets.addEventListener("click", handleLocation);

  const ships = document.getElementById("capsules");
  ships.addEventListener("click", handleShips);

  const character = document.getElementById("characters");
  character.addEventListener("click", handleCharacters);
}



function onSelectLocation(data) {
  let dataAtt = data.getAttribute("id");
  dataAtt++;
  $.ajax({
    method: "GET",
    url: "https://rickandmortyapi.com/api/location/" + dataAtt,
    success: locationSelect,
    error: errorMsg
  })
}


function locationSelect(data) {

  const selectLocation = document.querySelector(".select-location");
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
  const dataAtt = data.getAttribute("id");
  $.ajax({
    method: "GET",
    url: "https://api.spacexdata.com/v3/capsules/" + dataAtt,
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
  const selectShip = document.querySelector('.select-ship');
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
  let dataAtt = data.getAttribute("id");
  dataAtt++;

  $.ajax({
    method: "GET",
    url: "https://rickandmortyapi.com/api/character/" + dataAtt,
    success: characterSelect,
    error: errorMsg
  })
}

function characterSelect(data) {

  const selectCharacter = document.querySelector(".select-character");
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
  liLocation.textContent = data.location;

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

// Location Condition ->

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

//  Ship Condition ->

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

// Character Condition ->

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
  const selections = {
    character: character,
    ship: ship,
    location: location
  };
  displayTravel(points, selections);
}

function displayTravel(points, selections){
  console.log(selections)
  const finish = document.querySelector('#finish');
  const travelModalRandom = Math.floor(Math.random() * 5);
  const travelModal = document.createElement('iframe');
  travelModal.setAttribute('src', travel[travelModalRandom]);
  travelModal.classList.add('no-point', 'giphy');
  finish.appendChild(travelModal);
  finish.classList.remove('hidden');


  setTimeout(() => {
    travelModal.classList.add('hidden');
    displayFinish(points);
  }, 4500)
}

function displayFinish(points){
  const finish = document.querySelector('#finish');

  const random = Math.floor(Math.random() * 60);
  let winOrLose = document.createElement('iframe');
  winOrLose.classList.add('no-point', 'giphy')
  if (points < 25) {
    const number = Math.floor(Math.random() * 2)
    winOrLose.setAttribute('src', crash[number])
  } else if (random > points) {
    const number = Math.floor(Math.random() * 4);
    winOrLose.setAttribute('src', win[number]);
  } else if (random === points) {
    winOrLose.setAttribute('src', 'https://giphy.com/embed/yjI5G3pE3NH3O');
  } else if (random < points) {
    const number = Math.floor(Math.random() * 3);
    winOrLose.setAttribute('src', lose[number]);
  }
  finish.appendChild(winOrLose);
}




handlers();
