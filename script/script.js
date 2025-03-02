// read and task increament and decreament
function updatePoint() {
    let task = document.getElementById("task");
    let read = document.getElementById("read");
    let taskValueToNumber = parseInt(task.innerText);
    let readValueToNumber = parseInt(read.innerText);
    if (taskValueToNumber > 0) {
      taskValueToNumber -= 1;
      readValueToNumber += 1;
      task.innerText = taskValueToNumber;
      read.innerText = readValueToNumber;
      alert("Board updated Successfully");
      let button = event.target;
      button.disabled = true;
      button.style.backgroundColor = "gray";
      if (taskValueToNumber===0){
        alert("Congrats!!! You have completed all the current task");
      }
    }
  }

  // redirecting from home page
  document.getElementById("blogs-page").addEventListener("click",function(){
    window.location.href = "./blogs.html"
})

function addHistory(){
  const historyContainer = document.getElementById("history-container"); 
  const p = document.createElement("p");
  const currentTime = new Date().toLocaleString(); 
  const task =document.getElementById("task-name").innerText;
  p.innerText = `Completed "${task}" at ${currentTime}`; 
  p.classList.add("p-2", "text-sm", "text-gray-700", "mx-2"); 

  historyContainer.appendChild(p);
}

document.getElementById("clear-history").addEventListener("click", function() {
  const historyContainer = document.getElementById("history-container");
  historyContainer.innerHTML = "";
});

