const form = document.getElementById("form");
const taskBox = document.getElementById("taskBox");

form.addEventListener("submit",(e) => {
    window.stop()
    if(taskBox.value === ""){
        alert("you should write your task");
    }

e.preventDefault();

    let theTask = document.createElement("li");
    theTask.innerText = taskBox.value; 
    document.body.appendChild(theTask);
    theTask.className = "task";
    taskBox.value = "";
    theTask.addEventListener('click',taskDone)

    function taskDone(){
        theTask.style.backgroundColor = "green";
        theTask.addEventListener('mouseover', redBtn)
    }

    function redBtn(){
        theTask.style.backgroundColor = "red";
        theTask.addEventListener('click', deleteRedBtn)
    }

    function deleteRedBtn(){
        theTask.remove();
    }
})