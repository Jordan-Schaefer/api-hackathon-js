$.ajax({
  method: "GET",
  url: "https://rickandmortyapi.com/api/location/",
  success: result
})

$.ajax({
  mathod: "GET",
  url: "https://rickandmortyapi.com/api/character/",
  success: result
})

$.ajax({
  method: "GET",
  url: "https://api.spacexdata.com/v3/capsules/C112",
  success: result
})

$.ajax({
  method: "GET",
  url: "https://api.spacexdata.com/v3/capsules",
  success: resultX
})

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
