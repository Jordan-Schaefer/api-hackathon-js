//Rick and Morty Planets

$.ajax({
  method: "GET",
  url: "https://rickandmortyapi.com/api/location/",
  success: rickAndMortyPlanetImage,
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
  success: resultXStatus,
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


function errorMsg(error) {
  console.error(error);
}


function rickAndMortyPlanetImage(data) {
  var body = document.querySelector("body");
  var container = document.createElement("div");
  container.setAttribute("class", "container");

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
    button.setAttribute("class", "btn");

    innerContainer.appendChild(h1);
    innerContainer.appendChild(newImage);
    ul.appendChild(liType);
    ul.appendChild(liDimension);
    ul.appendChild(liResidents);
    innerContainer.appendChild(ul);
    innerContainer.appendChild(button);
    container.appendChild(innerContainer);

  }
  body.appendChild(container);
}



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


function spaceXCapsules(data){
  var body = document.querySelector("body");
  var container = document.createElement("div");
  container.setAttribute("class", "container");
  for(var i = 0; i < data.length; i++){
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

    container.setAttribute("class", "container");
    innerContainer.setAttribute("class", "inner-container");
    h1.setAttribute("class", "title");
    image.setAttribute("src", imageResult);
    image.setAttribute("class", "image");
    liCapsule.setAttribute("class", "list");
    liStatus.setAttribute("class", "list");
    liMissions.setAttribute("class", "list");
    button.setAttribute("class", "btn");

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




function result(data) {
  console.log(data);
}

function spaceXdata(data) {
  console.log(data);
}

function resultXStatus(data) {
  console.log(data);
}

function rickAndMortyCharacterImage(data) {
  var body = document.querySelector("body");
  var container = document.createElement("div");

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

    container.setAttribute("class", "container");
    innerContainer.setAttribute("class", "inner-container");
    h1.setAttribute("class", "title");
    img.setAttribute("src", imgResult);
    img.setAttribute("class", "image");
    liStatus.setAttribute("class", "list");
    liSpecies.setAttribute("class", "list");
    liLocation.setAttribute("class", "list");
    button.setAttribute("class", "btn");

    innerContainer.appendChild(h1);
    innerContainer.appendChild(img);
    ul.appendChild(liStatus);
    ul.appendChild(liSpecies);
    ul.appendChild(liLocation);
    innerContainer.appendChild(ul);
    innerContainer.appendChild(button);
    container.appendChild(innerContainer);

    body.appendChild(container);
  }
}


// function scroll() {
//   var _C = document.querySelector(".container");
//   var n = _C.children.length;
//   _C.style.setProperty("--n", n);

//   function unify(e){
//     return e.changedTouches ? e.changedTouches[0] : e;
//   }

//   var x0 = null;

//   function lock(e) {
//     x0 = unify(e).clientX;
//   }

//   var i = 0;

//   function move(e) {
//     if(x0 || x0 === 0){
//       var dx = unify(e).clientX - x0, s = Math.sign(dx);
//       if((i > 0 || s < 0) && (i < n - 1 || s > 0)){
//         _C.style.setProperty("--i", i -= s);
//       }
//       x0 = null;
//     }
//   }

//   _C.addEventListener("mousedown", lock, false);
//   _C.addEventListener("touchstart", lock, false);

//   _C.addEventListener("mouseup", move, false);
//   _C.addEventListener("touchend", move, false);
// }
// setTimeout(scroll, 100);
