function addtodo(){
    var input = document.getElementById("todo-input");
    // console.log(input.value);


    var list = document.getElementById("listitem");
    var listelement = document.createElement("li");

    var listtext = document.createTextNode(input.value);
listelement.appendChild(listtext);


// ==================================== Del button ================
var delbtn = document.createElement("button");
var delbtntext = document.createTextNode("Delete");
delbtn.appendChild(delbtntext);

delbtn.setAttribute("onclick","delTodo(this)");
listelement.appendChild(delbtn);




// ==================================== Edit button ================
var editbtn = document.createElement("button");
var editbtntext = document.createTextNode("Edit");
editbtn.appendChild(editbtntext);
editbtn.setAttribute("onclick","editTodo(this)");

listelement.appendChild(editbtn);




list.appendChild(listelement);
console.log(listelement);

input.value ="";
}

function deletetodo(){
    var list = document.getElementById("listitem");
// list.innerHTML ="";
list.remove();


}

function delTodo(e){
    console.log(e.parentNode.remove());
}

function editTodo(e){
    var currentli = e.parentNode.firstChild.nodeValue;
    var inputfield = prompt("Enter update value");
    e.parentNode.firstChild.nodeValue = inputfield;

}