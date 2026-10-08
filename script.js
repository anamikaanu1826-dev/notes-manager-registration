function addNote(){
    let text=document.getElementById("Note").value;
    if(text=="")return alert ("enter a Note.");
    let note=document.createElement("div");
    note.className="Note";
    note.innerHTML=
    "<span>"+text+"</span>"+
    '<button onclick="deleteNote(this)">Delete </button>'+
    '<button onclick="editNote(this)">Edit </button>';
    document.getElementById("Notes").appendChild(note);
    document.getElementById("Note").value="";
}
function editNote(btn){
    let span=btn.parentElement.querySelector("span");
    let text=prompt("Edit note:",span.textContent);
    if(text)span.textContent=text;
}
function deleteNote(btn){
    btn.parentElement.remove();
}