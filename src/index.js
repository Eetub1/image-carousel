
const carImages = document.querySelectorAll(".carImg")
const navBallsCont = document.getElementById("balls")
let index = 0

function colorBall() {
    const balls = document.querySelectorAll(".navBall")
    for (const ball of balls) {
        ball.classList.remove("selected")
    }
    balls[index].classList.add("selected")
}

function prevSlide() {
    index -= 1
    if (index < 0) {
        index = carImages.length - 1
    }
    showSlide()
}

function nextSlide() {
    index += 1
    if (index >= carImages.length) {
        index = 0
    }
    showSlide()
}

function showSlide() {
    for (let i = 0; i < carImages.length; i++) {
        carImages[i].classList.add("hide")
        carImages[i].classList.remove("show")
    }

    colorBall()

    carImages[index].classList.remove("hide")
    carImages[index].classList.add("show")
}

function createNavBalls() {
    for (let i = 0; i < carImages.length; i++) {
        const btn = document.createElement("button")
        btn.addEventListener("click", () => {
            index = i
            showSlide()
        })
        btn.className = "navBall"
        navBallsCont.appendChild(btn)
    }
}

createNavBalls()
showSlide()
