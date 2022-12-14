const gif = document.getElementById("generated-gif");
const button = document.querySelector('button');
const userInput = document.getElementById("search-input");
const errorMsg = document.getElementById("error-msg");

const reset = () => {
  gif.src = "";
  gif.style.border = "none";
  errorMsg.style.display = "none";
}

button.addEventListener("click", () => {
  reset();
  if (userInput.value.trim() == "") {
    location.reload();
  } else {
  getGif();
  }
});

const getGif = async () => {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=XUilUesMKlBWTz8Yo6XWlgc92VHggh0e&s=${userInput.value}`, { mode: "cors" });
    const gifData = await response.json();
    gif.src = gifData.data.images.original.url;
    gif.style.border = "2px solid var(--white)";
    gif.style.display = "block";
  } 
  catch {
    gif.style.display = "none";
    errorMsg.style.display = "block";
    errorMsg.textContent = `No GIFs found for ${userInput.value}`;
    userInput.value = "";
  }
}
