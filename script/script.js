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
    }
  }
