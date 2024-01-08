let pleyer_1 = document.querySelector("#player1")
let pleyer_2 = document.querySelector("#player2")
let gameLevel = document.querySelector("#gameLavel")
let bntPlayerOne = document.querySelector("#btnPlayer1")
let bntPlayerTwo = document.querySelector("#btnPlayer2")
let ResetBnt = document.querySelector("#reset")
let gameLavelVol = gameLevel.value
let playerOne_result = 1
let playerTwo_result = 1
function grooup() {


    // pleyer One
    bntPlayerOne.addEventListener("click", () => {
        pleyer_1.textContent = playerOne_result++

        if (playerOne_result > gameLevel.value) {
            pleyer_1.textContent = gameLevel.value
            pleyer_1.style.color = 'green'
            pleyer_2.style.color = 'red'
        }
    })

    // pleyer Two
    bntPlayerTwo.addEventListener("click", () => {
        pleyer_2.textContent = playerTwo_result++

        if (playerTwo_result > gameLevel.value) {
            pleyer_2.textContent = gameLevel.value
            pleyer_2.style.color = 'green'
            pleyer_1.style.color = 'red'
        }
    })

    gameLevel.addEventListener("click", () => {
        playerOne_result = 0
        playerTwo_result = 0
        pleyer_1.textContent = playerOne_result++
        pleyer_2.textContent = playerTwo_result++
        pleyer_1.style.color = "black"
        pleyer_2.style.color = "black"

    })

    ResetBnt.addEventListener("click", () => {
        playerOne_result = 0
        playerTwo_result = 0
        pleyer_1.textContent = playerOne_result++
        pleyer_2.textContent = playerTwo_result++
        pleyer_1.style.color = "black"
        pleyer_2.style.color = "black"
    })
}
grooup()

