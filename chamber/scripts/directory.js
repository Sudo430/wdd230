//member directory json location
const dirPath = "data/members.json";

//loading members


async function getMembers(){
    const response = await fetch(dirPath);
    if(response.ok){
        const data = await response.json();
        displayMembers(data);
    }
    else{
        return null
    }
}

getMembers();

function displayMembers(data){
    const div = document.querySelector("#comp-dir");
    div.innerHTML = "";

    data.members.forEach((memberData) => {
        const member = document.createElement("section");
        member.className = "comp-card";
        const img = document.createElement("img");
        const description = document.createElement("p");

        img.setAttribute("src", "https://picsum.photos/100/100");
        img.setAttribute("alt", `${memberData.name} logo`);
        
        description.innerHTML = `<p>${memberData.name}<br>${memberData.addresse}<br>${memberData.phone}<br><a href="${memberData.url}">${memberData.url}</a></p>`;

        member.appendChild(img);
        member.appendChild(description);

        div.appendChild(member);
    });
}