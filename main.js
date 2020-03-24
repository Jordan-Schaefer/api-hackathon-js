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
  success: result
})

// Rick and Morty Specific Character

$.ajax({
  method: "GET",
  url: "https://rickandmortyapi.com/api/character/2",
  success: image,
  error: errorMsg
})

// SpaceX Capsules

$.ajax({
  method: "GET",
  url: "https://api.spacexdata.com/v3/capsules",
  success: result
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


function result(data){
  console.log(data);
}

function resultX(data) {
  console.log(data);
}

function resultXStatus(data) {
  console.log(data[1].status);
}

function image(data){
  var body = document.querySelector("body");
  var img = document.createElement("img");
  var newImage = data.image;
  img.setAttribute("src", newImage);
  body.appendChild(img);
}

function errorMsg(error){
  console.error(error);
}
