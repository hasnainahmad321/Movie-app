
const movieName = document.getElementById("movieName");
movieName.addEventListener("change", (e) => {
  console.log(e.target.value);
});
const yearLaunched = document.getElementById("yearLaunched");
yearLaunched.addEventListener("change", (e) => {
  console.log(e.target.value);
});
const searchButton = document.getElementById("searchButton");

const movieList = document.getElementById("movieList");

const poster = document.getElementById("poster");

searchButton.addEventListener("click", (e) => {
  fetch(
    "http://www.omdbapi.com/?s=" +
      movieName.value +
      "&y=" +
      yearLaunched.value +
      "&apikey=8e70360f"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      movieList.innerHTML = "";
      if (data.Search && data.Search.length > 0) {
        data.Search.forEach((movie) => {
          const li = document.createElement("li");
          li.textContent = movie.Title;
          movieList.appendChild(li);
          poster.src = data.Search[0].Poster;
        });
      } else {
        const li = document.createElement("li");
        li.textContent = "No movie found";
        movieList.appendChild(li);
      }
      console.log(data);
    })
    .catch((err) => {
      console.log(err, "There is something wrong");
    });
});