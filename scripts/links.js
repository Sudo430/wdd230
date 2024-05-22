
//Why did you have me make the variable if we never use it?
const baseURL = "https://sudo430.github.io/wdd230/";

const linksURL = "https://sudo430.github.io/wdd230/data/links.json";


//local link for debuging
//const linksURL = "data/links.json";

async function getLinks(){
    const response = await fetch(linksURL);
    if(response.ok){
        const data = await response.json();
        displayLinks(data);
    }
}

function displayLinks(weeks){
    const linkList = document.querySelector("#link-list");
    linkList.innerHTML = "";
    weeks.weeks.forEach((element) => {
        const weekLink = document.createElement("li");
        weekLink.textContent = `${element.week}: `;

        element.links.forEach((link) => {
            const a = document.createElement("a");
            a.setAttribute("href", link.url);
            a.innerText = link.title;

            weekLink.appendChild(a);
            weekLink.innerHTML += " | "
        });
        weekLink.innerHTML = weekLink.innerHTML.substring(0, weekLink.innerHTML.length - 3);

        linkList.appendChild(weekLink);
    });
}


getLinks();