let homeScoreEL = document.getElementById("home-score")
let homeBtn1 = document.getElementById("home-score-btn-1")
let homeBtn2 = document.getElementById("home-score-btn-2")
let homeBtn3 = document.getElementById("home-score-btn-3")
let homeScore = 0
let guestScoreEl = document.getElementById("guest-score")
let guestBtn1 = document.getElementById("guest-score-btn-1")
let guestBtn2 = document.getElementById("guest-score-btn-2")
let guestBtn3 = document.getElementById("guest-score-btn-3")
let guestScore = 0


function increaseHomeScoreOne() {
homeScore += 1
homeScoreEL.textContent = homeScore
}

function increaseHomeScoreTwo() {
    homeScore += 2
    homeScoreEL.textContent = homeScore
    }

    function increaseHomeScoreThree() {
        homeScore += 3
        homeScoreEL.textContent = homeScore
        }





function increaseGuestScoreOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

