let finalscore = document.querySelector(".finalscore");

finalscore.innerText = JSON.parse(localStorage.getItem("totalscore"));
