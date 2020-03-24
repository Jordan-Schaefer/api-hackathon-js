//Rick and Morty Planets

$.ajax({
  method: "GET",
  url: "https://rickandmortyapi.com/api/location/",
  success: result
})

//Rick and Morty Characters

$.ajax({
  mathod: "GET",
  url: "https://rickandmortyapi.com/api/character/",
  success: image
})

// Rick and Morty Specific Character

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
  success: resultX
})

$.ajax({
  method: "GET",
  url: "https://api.spacexdata.com/v3/ships",
  success: resultX
})

// SpaceX Status

$.ajax({
  method: "GET",
  url: "https://api.spacexdata.com/v3/capsules",
  success: resultXStatus
})


function result(data) {
  console.log(data);
}

function resultX(data) {
  console.log(data);
}

function resultXStatus(data) {
  console.log(data[1].status);
}

function image(data) {
  var body = document.querySelector("body");
  for (var i = 0; i < data.results.length; i++) {
    var container = document.createElement("div");
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

function errorMsg(error) {
  console.error(error);
}
