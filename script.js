const inputBox= document.getElementById("input-box");
const listcontainer= document.getElementById("list-container");

function addtask(){
    if(inputBox.value== ''){
        alert("you must write something!");
    }
    else{
        let li =document.createElement("li")
        li.innerHTML= inputBox.value;
        listcontainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML="/u00d7";
        li.appendChild(span);
    }
    
}