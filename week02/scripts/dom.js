const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');




button.addEventListener('click', () => {
    if(input.value == ""){
        console.log("nothing to add");
        input.focus()
        return;
    };

    const listItem = document.createElement('li');

    const deleButton =document.createElement('button');
    deleButton.textContent = "❌";
    deleButton.addEventListener('click', () =>{
        listItem.remove();
    })
    
    listItem.innerHTML = input.value;
    listItem.append(deleButton)
    list.append(listItem)

    input.value = "";
    input.focus();
});

