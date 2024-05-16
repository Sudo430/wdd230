//counts the number of visits the user has made
const visitCount = document.querySelector("#visit-count");

let count = 1 + JSON.parse(localStorage.getItem("visitCount"));
visitCount.innerHTML = count;
localStorage.setItem("visitCount", JSON.stringify(count))

