
export function showWALLET(){
    document.getElementById("nowGame").style.display = "none";
    document.getElementById("nowProfile").style.display = "none";
    document.getElementById("nowRating").style.display = "none";
    document.getElementById("nowWallet").style.display = "block";
    document.getElementById("walletbar").style.background = "#222222";
    document.getElementById("gameonbar").style.background = "#000000";
    document.getElementById("leaderboard").style.background = "#000000";
    document.getElementById("profile").style.background = "#000000";
};

export function showGAME(){
    document.getElementById("nowGame").style.display = "block";
    document.getElementById("nowProfile").style.display = "none";
    document.getElementById("nowRating").style.display = "none";
    document.getElementById("nowWallet").style.display = "none";
    document.getElementById("walletbar").style.background = "#000000";
    document.getElementById("gameonbar").style.background = "#222222";
    document.getElementById("leaderboard").style.background = "#000000";
    document.getElementById("profile").style.background = "#000000";
};

export function showRATING() {
    document.getElementById("nowGame").style.display = "none";
    document.getElementById("nowProfile").style.display = "none";
    document.getElementById("nowRating").style.display = "block";
    document.getElementById("nowWallet").style.display = "none";
    document.getElementById("walletbar").style.background = "#000000";
    document.getElementById("gameonbar").style.background = "#000000";
    document.getElementById("leaderboard").style.background = "#222222";
    document.getElementById("profile").style.background = "#000000";
};

export function showPROFILE() {
    document.getElementById("nowGame").style.display = "none";
    document.getElementById("nowProfile").style.display = "block";
    document.getElementById("nowRating").style.display = "none";
    document.getElementById("nowWallet").style.display = "none";
    document.getElementById("walletbar").style.background = "#000000";
    document.getElementById("gameonbar").style.background = "#000000";
    document.getElementById("leaderboard").style.background = "#000000";
    document.getElementById("profile").style.background = "#222222";
};

export function changeColor(){
    document.getElementById("messageText").style.color = "white";
};