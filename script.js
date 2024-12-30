const input = document.querySelector("#input");
const addTask = document.querySelector(".addtask");
const error = document.querySelector(".error");
const ulContent = document.querySelector(".ulcontent");
const taskContent = document.querySelector(".task-content");

let errorMessage = document.createElement("p");
errorMessage.innerHTML= "Please enter a task!!!";
errorMessage.style.textAlign="centre";
errorMessage.style.color="#fc1f32e8";
errorMessage.style.fontSize=".9rem"
errorMessage.style.display="none";
error.appendChild(errorMessage);



addTask.addEventListener("click", handleInput);

function handleInput(){
    let mainInput = input.value;
    console.log(mainInput);
    if(mainInput === ""){
        errorMessage.style.display="block";
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 3000);
    }else {
        let li= document.createElement("li");
        li.innerHTML = mainInput;
        ulContent.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML="\u00d7";
        li.appendChild(span);

        taskContent.addEventListener("click", (e)=>{
            if(e.target.tagName === "LI"){
                e.target.classList.toggle("checked");
                saveList()
            }else if(e.target.tagName === "SPAN") {
                e.target.parentElement.remove();
                saveList()
            }
        }, false);
        

    }
    input.value = "";
    saveList()
    
}

function saveList(){
    localStorage.setItem("task", ulContent.innerHTML);
}

function showTask(){
    ulContent.innerHTML = localStorage.getItem("task");
}

showTask();