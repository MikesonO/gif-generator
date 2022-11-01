const gif = document.getElementById("generated-gif");
const button = document.querySelector('button');

gif.style.display = "none";


button.addEventListener("click", ()=>{
fetch("https://api.giphy.com/v1/gifs/translate?api_key=XUilUesMKlBWTz8Yo6XWlgc92VHggh0e&s=bear", {
    mode: "cors"
  })
  .then((response) => response.json())
  .then((response) => {
    gif.src = response.data.images.original.url;
  })
  .catch((error) => {
    console.error('Error:', error);
  });

  gif.style.display = "block";
});