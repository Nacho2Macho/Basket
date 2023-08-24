const favourites = document.querySelectorAll(".icon-heart-14");

for (const favourite of favourites) {
    favourite.addEventListener("click", () => {
        // clearFavourites()

        favourite.classList.toggle("active");
    })
}
// function clearFavourites() {
//     favourites.forEach((favourite) => {
//         favourite.classList.remove("active")
//     })
// }