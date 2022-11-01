const img = document.querySelector('img');
const button = document.querySelector('button');


button.addEventListener("click", ()=>{
fetch("https://api.giphy.com/v1/gifs/translate?api_key=XUilUesMKlBWTz8Yo6XWlgc92VHggh0e&s=bear", {
    mode: "cors"
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    img.src = response.data.images.original.url;
  })

});