//Rick and Morty Planets
var container = document.querySelector("#planets");

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


var rickAndMorthyPlanets = [
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

var spaceXShips = [
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

var spaceXshipsObj = {
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

function errorMsg(error) {
  console.error(error);
}

function result(data) {
  console.log(data);
}

function rickAndMortyPlanetImage(data) {

  container.classList.add("hidden");

  for (var i = 0; i < data.results.length; i++) {
    var innerContainer = document.createElement("div");
    var h1 = document.createElement("h1");
    var newImage = document.createElement("img");
    var ul = document.createElement("ul");
    var liType = document.createElement("li");
    var liDimension = document.createElement("li");
    var liResidents = document.createElement("li");
    var button = document.createElement("button");

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
  var body = document.querySelector("body");
  var container = document.getElementById("capsules");

  for (var i = 0; i < data.length; i++) {
    var innerContainer = document.createElement("div");
    var h1 = document.createElement("h1");
    var image = document.createElement("img");
    var ul = document.createElement("ul");
    var liCapsule = document.createElement("li");
    var liStatus = document.createElement("li");
    var liMissions = document.createElement("li");
    var button = document.createElement("button");

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

  var container = document.getElementById("characters");

  for (var i = 0; i < data.results.length; i++) {

    var innerContainer = document.createElement("div");
    var h1 = document.createElement("h1");
    var img = document.createElement("img");
    var ul = document.createElement("ul");
    var liStatus = document.createElement("li");
    var liSpecies = document.createElement("li");
    var liLocation = document.createElement("li");
    var button = document.createElement("button");

    h1.textContent = data.results[i].name;
    var imgResult = data.results[i].image;
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

  var introModal = document.querySelector(".intro-modal");
  introModal.classList.add("hidden");

  var planets = document.getElementById("planets");
  planets.classList.remove("hidden");
}



function handleLocation(event) {
  var planets = document.getElementById("planets");
  planets.classList.add("hidden");

  var ships = document.getElementById("capsules");
  ships.classList.remove("hidden");
  onSelectLocation(event.target);
}


function handleShips(event){
  var ships = document.getElementById("capsules");
  ships.classList.add("hidden");

  var characters = document.getElementById("characters");
  characters.classList.remove("hidden");
  console.log(event.target)
  onSelectShips(event.target);
}


function handleCharacters(event){
  onSelectCharacter(event.target);
}


function handlers() {
  var introButton = document.getElementById("introModal");
  introButton.addEventListener("click", handleIntro);

  var planets = document.getElementById("planets");
  planets.addEventListener("click", handleLocation);

  var ships = document.getElementById("capsules");
  ships.addEventListener("click", handleShips);

  var character = document.getElementById("characters");
  character.addEventListener("click", handleCharacters);
}



function onSelectLocation(data) {

  var dataAtt = data.getAttribute("id");
  dataAtt++;
  $.ajax({
    method: "GET",
    url: "https://rickandmortyapi.com/api/location/" + dataAtt,
    success: locationSelect,
    error: errorMsg
  })
}


function locationSelect(data){
  console.log(data);
  var selectLocation = document.querySelector(".select-location");
  var innerContainer = document.createElement("div");
  var h1 = document.createElement("h1");
  var img = document.createElement("img");
  var ul = document.createElement("ul");
  var liType = document.createElement("li");
  var liDimension = document.createElement("li");
  var liResidents = document.createElement("li");

  innerContainer.classList.add("inner-container");
  h1.classList.add("title");
  img.setAttribute("src", rickAndMorthyPlanets[data.id - 1]);
  img.classList.add("image")
  liType.classList.add("list");
  liDimension.classList.add("list");
  liResidents.classList.add("list");

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

function onSelectShips(data){
  console.log(data);
  var dataAtt = data.getAttribute("id");
  console.log(dataAtt);
  $.ajax({
    method: "GET",
    url: "https://api.spacexdata.com/v3/capsules/" + dataAtt,
    success: shipSelect,
    error: errorMsg
  })
}

function shipSelect(data){
  console.log(data)
  var image = data.capsule_serial;
  for (var keys in spaceXshipsObj){
    if (keys === image){
      image = spaceXshipsObj[keys];
    }
  }
  var selectShip = document.querySelector('.select-ship');
  var innerContainer = document.createElement('div');
  var h1 = document.createElement('h1');
  var img = document.createElement('img');
  var ul = document.createElement('ul');
  var liCapsule = document.createElement("li");
  var liStatus = document.createElement("li");
  var liMissions = document.createElement("li");

  innerContainer.classList.add('inner-container');
  h1.classList.add('title');
  img.setAttribute('src', image);
  img.classList.add('image');
  liCapsule.classList.add('list');
  liStatus.classList.add('list');
  liMissions.classList.add('list');

  h1.textContent = data.capsule_serial;
  liCapsule.textContent = "Calsule: " + data.capsule_id;
  liStatus.textContent = "Status: " + data.status;
  liMissions.textContent = "Missions: " + data.missions.length

    // liCapsule.textContent = "Capsule: " + data[i].capsule_id;
  // liStatus.textContent = "Status: " + data[i].status;
  // liMissions.textContent = "Missions: " + data[i].missions.length;

  innerContainer.appendChild(h1);
  innerContainer.appendChild(img);
  ul.appendChild(liCapsule);
  ul.appendChild(liStatus);
  ul.appendChild(liMissions);
  innerContainer.appendChild(ul);
  selectShip.appendChild(innerContainer);
}


function onSelectCharacter (data){
  console.log(data)
  var dataAtt = data.getAttribute("id");
  dataAtt++;

  console.log(dataAtt);
  $.ajax({
    method: "GET",
    url: "https://rickandmortyapi.com/api/character/" + dataAtt,
    success: characterSelect,
    error: errorMsg
  })
}

function characterSelect (data){
  console.log(data);
  var selectCharacter = document.querySelector(".select-character");
  var innerContainer = document.createElement("div");
  var h1 = document.createElement("h1");
  var img = document.createElement("img");
  var ul = document.createElement("ul");
  var liStatus = document.createElement("li");
  var liSpecies = document.createElement("li");
  var liLocation = document.createElement("li");

  innerContainer.classList.add("inner-container");
  h1.classList.add("title");
  img.setAttribute("src", data.image);
  img.classList.add("image")
  liStatus.classList.add("list");
  liSpecies.classList.add("list");
  liLocation.classList.add("list");

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

}


handlers();
