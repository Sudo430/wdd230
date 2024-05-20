const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData(){
    const responce = await fetch(url);
    

    if(responce.ok){
        const data = await responce.json();
        displayProphets(data.prophets);
    }
};

function displayProphets(prophets){
    prophets.forEach((prophet) => {
        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        const portrait = document.createElement("img");
        const birthInfo = document.createElement("p");

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Image of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        birthInfo.innerHTML = `Date of Birth: ${prophet.birthdate}<br>Place of Birth: ${prophet.birthplace}`;

        card.appendChild(fullName);
        card.appendChild(birthInfo);
        card.appendChild(portrait);
        
        card.className = "card";

        cards.appendChild(card);
    });
};

getProphetData();