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
    const div = document.querySelector("#comp-dir-gallary");
    const table = document.querySelector("#list");
    const mTable = document.querySelector("#m-list");
    div.innerHTML = "";
    table.innerHTML = "";
    mTable.innerHTML = "";

    data.members.forEach((memberData) => {
        //populate cards
        const member = document.createElement("section");
        const img = document.createElement("img");
        const description = document.createElement("span");

        img.setAttribute("src", memberData.imageFileName);
        img.setAttribute("alt", `${memberData.name}s logo`);
        img.setAttribute("width","200");
        img.setAttribute("height", "100");
        img.setAttribute("loading", "lazy")
        
        const pic = document.createElement("picture");
        pic.appendChild(img);

        description.innerHTML = `<h3>${memberData.name}</h3>${memberData.addresse}<br>${memberData.phone}<br><a href="${memberData.url}">${memberData.url}</a>`;

        member.className = "comp-card";
        member.appendChild(pic);
        member.appendChild(description);

        div.appendChild(member);

        //populate table
        
        const tableRow = document.createElement("tr");
        tableRow.innerHTML = `<td>${memberData.name}</td><td>${memberData.addresse}</td><td>${memberData.phone}</td><td><a href="${memberData.url}">${memberData.url}</a></td>`;

        
        table.appendChild(tableRow);

        //populate mobile table
        const mTableRow = document.createElement("tr");
        mTableRow.innerHTML = `<td>${memberData.name}<br>${memberData.addresse}<br>${memberData.phone}<br><a href="${memberData.url}">${memberData.url}</a></td>`;
        mTable.appendChild(mTableRow);
        

    });
}

document.querySelector("#toggle-veiw").addEventListener("click", (button) => {
    if(button.target.textContent === "List"){
        button.target.textContent = "Gallary";
        document.querySelector("#comp-dir-gallary").className = "hide";
        document.querySelector("#comp-dir-list").className = "show";
        document.querySelector("#m-comp-dir-list").className = "show";
    }
    else{
        button.target.textContent = "List"
        document.querySelector("#comp-dir-gallary").className = "show";
        document.querySelector("#comp-dir-list").className = "hide";
        document.querySelector("#m-comp-dir-list").className = "hide";
    }
});