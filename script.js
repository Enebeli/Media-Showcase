document.addEventListener("DOMContentLoaded", () => {
    let filterSelect = document.getElementById("filter");
    let movieList = document.querySelectorAll("figure");

    filterSelect.addEventListener("change", () => {
        let selectedGenre = filterSelect.value;

        movieList.forEach((movie) => {
            if (selectedGenre === "all" || movie.classList.contains(selectedGenre)) {
                movie.style.display = "block";
            } else {
                movie.style.display = "none";
            }
        });
    });
});
