const gif = document.getElementById("generated-gif");
const button = document.querySelector('button');
const userInput = document.getElementById("search-input");

button.addEventListener("click", ()=>{
  if(userInput.value.trim() == ""){
    location.reload();
  }
fetch(`https://api.giphy.com/v1/gifs/translate?api_key=XUilUesMKlBWTz8Yo6XWlgc92VHggh0e&s=${userInput.value}`, {
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