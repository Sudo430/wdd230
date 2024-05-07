const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

//gets chapter list from localStorage
function getChapterList(){
    return JSON.parse(localStorage.getItem("scriptureArray"))
}

//the array that contains the chapters
let chaptersArray = getChapterList() || [];

//adds an element for each chapter in the array
chaptersArray.forEach(element => {
    addScripture(element)
});

//save the chapters list in local storage
function setChapterList(){
    localStorage.setItem("scriptureArray", JSON.stringify(chaptersArray));
}

//removes the chapter from the array
function deleteChapter(chapter){
    chaptersArray = chaptersArray.filter((x) => {
        return `${x}\n❌` !== chapter;
    })
    setChapterList();
}

//adds an element to the site
function addScripture(inputStr){

    const listItem = document.createElement('li');

    const deleButton = document.createElement('button');
    deleButton.textContent = "❌";
    deleButton.addEventListener('click', () =>{

        deleteChapter(listItem.innerText);
        listItem.remove();
    })
    
    listItem.innerHTML = inputStr;
    listItem.append(deleButton)
    list.append(listItem)
}

//the event listener for the add chapter button
button.addEventListener('click', () => {
    if(input.value === ""){
        console.log("nothing to add");
        input.focus()
        return;
    };

    addScripture(input.value);

    chaptersArray.push(input.value);

    input.value = "";
    input.focus();

    setChapterList();
});

