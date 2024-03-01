const api_url = "https://api.chucknorris.io/jokes/random?category=science";
const joke = document.getElementById("joke");

async function getjoke(url) {
  // Warten, bis die Promise gelöst ist und den Wert zurückgeben
  let response = await fetch(url); //the following code will only be executed once the fetch leads to a response.
  let data = await response.json(); //the variable data will get the information from the api
  joke.innerHTML = data.value;
  //console.log(data); //the information will be displayed whenever the function is called//used to get info where stuff is
}

getjoke(api_url);

function tweetnow(b) {
  window.open(
    "https://twitter.com/intent/tweet?text=" + joke.innerHTML,
    "Tweet Window",
    "width=600, height=300"
  );
}
