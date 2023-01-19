// making the dropdown work
const dropdownButton = document.getElementById("dropdown")
const dropdownMenu = document.querySelector(".dropdown")
const dropdownItems = document.querySelectorAll(".dropdown div")

console.log(dropdownItems)


dropdownButton.addEventListener("click", () => {
    // dropdownMenu.style.display = "flex";
    console.log("it opens")
})

dropdownMenu.addEventListener("click", () => {
    dropdownMenu.style.display = "none";
    console.log("it closes")
})

for( let i = 0; i< dropdownItems.length; i++){
    dropdownItems[i].addEventListener("click", () => {
        console.log("it is not closed")
    })
}
