let teamOneShoot = document.querySelector("#teamone-shoot-button")
let teamOneNumShots = document.querySelector("#teamone-numshots")
let teamOneNumGoals = document.querySelector("#teamone-numgoals")

let teamTwoShoot = document.querySelector("#teamtwo-shoot-button")
let teamTwoNumShots = document.querySelector("#teamtwo-numshots")
let teamTwoNumGoals = document.querySelector("#teamtwo-numgoals")

teamOneShoot.addEventListener("click", function () {
    let newTeamOneNumShots = Number(teamOneNumShots.innerHTML) + 1;
    teamOneNumShots.innerHTML = newTeamOneNumShots;
    let x = Math.floor(Math.random() *20);
if (x % 2 == 0) {let newTeamOneGoals = Number(teamOneNumGoals.innerHTML) + 1;
    teamOneNumGoals.innerHTML = newTeamOneGoals;
    }
})

    teamTwoShoot.addEventListener("click", function () {
        let newTeamTwoNumShots = Number(teamTwoNumShots.innerHTML) + 1;
    let x = Math.floor(Math.random() *20);
    teamTwoNumShots.innerHTML = newTeamTwoNumShots;
    if (x % 2 == 0) {x = Number(teamTwoNumGoals.innerHTML) + 1;
        teamTwoNumGoals.innerHTML = x;}
    })

let gameReset = document.querySelector("#reset-button");
let resetCount = document.querySelector("#num-resets");

        gameReset.addEventListener("click", function () { 
            let newResetCount = Number(resetCount.innerHTML) + 1;           
            teamOneNumShots.innerHTML = "0";
            teamTwoNumShots.innerHTML = "0";
            teamOneNumGoals.innerHTML = "0";
            teamTwoNumGoals.innerHTML = "0";

        
        resetCount.innerHTML = newResetCount;
        
        
    })