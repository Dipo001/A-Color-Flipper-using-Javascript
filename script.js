const colors = ["green", "red", "rgba(133,122,300)", "#f15025"]
const button = document.getElementById("btn")
const  color = document.querySelector(".color")

btn.addEventListener("click", function () {
    const randomnumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomnumber];
    color.textContent = colors[randomnumber];
})
function getRandomNumber() {
    return Math.round(Math.random() * colors.length )
}
