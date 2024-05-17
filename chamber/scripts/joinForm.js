
//save time stamp to the hidden form elemet
document.querySelector("input[type=hidden]").value = Date.now();

//show the right description for the member radio selection

let currentDesc = "";

function showDesc(x){

    if(currentDesc !== ""){
        document.querySelector(`#${currentDesc[0]}`).style.display = "none";
    }

    currentDesc = x.target.id;

    document.querySelector(`#${currentDesc[0]}`).style.display = "inline";
}



document.querySelector("#npm").addEventListener("click", showDesc)
document.querySelector("#bronze").addEventListener("click", showDesc)
document.querySelector("#silver").addEventListener("click", showDesc)
document.querySelector("#gold").addEventListener("click", showDesc)
