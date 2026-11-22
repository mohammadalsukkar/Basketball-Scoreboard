let homePointsEl = document.querySelector(".home-points")
let guestPointsEl = document.querySelector(".guest-points")
let periodPointsEl = document.querySelector(".period-counter")
let foulHomePointsEl = document.querySelector(".fouls-home")
let foulGuestPointsEl = document.querySelector(".fouls-guest")
let timerEl = document.querySelector(".timer")
let homeScore = 0
let guestScore = 0
let periodScore = 0
let foulHomeScore = 0
let foulGuestScore = 0
let totalSeconds = 12 * 60
let timerId = null

// HOME
function add1home() {
    homeScore += 1
    homePointsEl.textContent = homeScore
    highlightTheLeader()
}

function add2home() {
    homeScore += 2
    homePointsEl.textContent = homeScore
    highlightTheLeader()
}

function add3home() {
    homeScore += 3
    homePointsEl.textContent = homeScore
    highlightTheLeader()
}


// GUEST
function add1guest() {
    guestScore += 1
    guestPointsEl.textContent = guestScore
    highlightTheLeader()
}

function add2guest() {
    guestScore += 2
    guestPointsEl.textContent = guestScore
    highlightTheLeader()
}

function add3guest() {
    guestScore += 3
    guestPointsEl.textContent = guestScore
    highlightTheLeader()
}

function newGame() {
    homeScore = 0
    guestScore = 0
    periodScore = 0
    foulHomeScore = 0
    foulGuestScore = 0


    homePointsEl.textContent = homeScore
    guestPointsEl.textContent = guestScore
    periodPointsEl.textContent = periodScore
    foulHomePointsEl.textContent = foulHomeScore
    foulGuestPointsEl.textContent = foulGuestScore

    highlightTheLeader()

    endGame()
    totalSeconds = 12 * 60
    showTime()
}

// Highlight The Leader
function highlightTheLeader() {
    homePointsEl.classList.toggle("leader" , homeScore > guestScore)
    guestPointsEl.classList.toggle("leader" , guestScore > homeScore)

/* OR 
function highlightTheLeader() {
    if (homeScore > guestScore) {
        homePointsEl.classList.add("leader")
        guestPointsEl.classList.remove("leader")
    }
    else if (guestScore > homeScore) {
        homePointsEl.classList.remove("leader")
        guestPointsEl.classList.add("leader")
    }
    else {
        homePointsEl.classList.remove("leader")
        guestPointsEl.classList.remove("leader")
    } */
}

function period() {
    periodScore += 1
    periodPointsEl.textContent = periodScore
}

function foulHome() {
    foulHomeScore += 1
    foulHomePointsEl.textContent = foulHomeScore
}

function foulGuest() {
    foulGuestScore += 1
    foulGuestPointsEl.textContent = foulGuestScore
}

function showTime() {
    let minutes = Math.floor(totalSeconds / 60)
    let seconds = totalSeconds % 60

    timerEl.textContent = String(minutes).padStart(2 , "0") + ":" + String(seconds).padStart(2 , "0")
}

function startGame() {
    if (timerId !== null) return
    timerId = setInterval(function () {
    totalSeconds -= 1
    showTime()
    if (totalSeconds === 0) {
    endGame() }
    } ,1000)
}

function endGame() {
    clearInterval(timerId)
    timerId = null
}

showTime()