const date = new Date();
document.querySelector("#year").innerHTML = date.getFullYear();

document.querySelector("#lastModified").innerHTML = `Last Modification: ${document.lastModified}`;