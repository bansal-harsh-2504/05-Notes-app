const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    img.src = "images/delete.png";
    img.className = "delete-btn";
    inputBox.setAttribute("contenteditable", "true");
    inputBox.classList.add("input-box");
    notesContainer.appendChild(inputBox).appendChild(img);
    updateStorage();
});

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(note =>{
            note.onkeyup = function(){
                updateStorage();
            }
        })
    }
});

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

document.addEventListener("keydown", event =>{
    if(event.key == "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});

showNotes();