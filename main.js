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
  success: resultX,
  error: errorMsg
})

$.ajax({
  method: "GET",
  url: "https://api.spacexdata.com/v3/ships",
  success: resultX,
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



var body = document.querySelector("body");
var newImage = document.createElement("img");
newImage.setAttribute("src", rickAndMorthyPlanets[0]);

body.appendChild(newImage);






function errorMsg(error) {
  console.error(error);
}

function rickAndMortyPlanetImage(data) {
  console.log(data);
}

function result(data){
  console.log(data);
}

function resultX(data) {
  console.log(data);
}

function resultXStatus(data) {
  console.log(data[1].status);
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

    container.setAttribute("class", "container hidden");
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
