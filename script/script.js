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

