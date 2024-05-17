const welcome = document.querySelector("#welcome");

//load the last visit date
let lastVisit = new Date(JSON.parse(localStorage.getItem("lastVisit")));


if(localStorage.getItem("lastVisit") == null){
    welcome.textContent = "Welcome! Let us know if you have any questions."
}
else{
    
    //calculate the number of days since last visit
    const daysSinceLastVisit = (Date.now() - lastVisit) / 84600000;

    //display message
    if(daysSinceLastVisit < 1){
        welcome.textContent = "Back so soon! Awesome!"
    }
    else if(daysSinceLastVisit < 2){
        welcome.innerHTML = `You last visited 1 day ago.`;
    }
    else{
        welcome.innerHTML = `You last visited ${daysSinceLastVisit.toFixed(0)} days ago`;
    }
}




//save current date to localstorage
localStorage.setItem("lastVisit", JSON.stringify(Date.now()));