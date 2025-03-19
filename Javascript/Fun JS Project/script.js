const addTaskBtn = document.getElementById("add-task-btn");

function attachDragEvents(target){
    target.addEventListener("dragstart", () => {
        target.classList.add("flying");
    });

    target.addEventListener("dragend", () => {
        target.classList.remove("flying");
    });
}

addTaskBtn.addEventListener("click", () => {
    const task = prompt("What is the task?");
    if (!task) return;

    const taskCard = document.createElement("p");
    taskCard.classList.add("item");
    taskCard.setAttribute("draggable", true);
    taskCard.textContent = task;

    attachDragEvents(taskCard);

    document.getElementById("items").appendChild(taskCard);
});

// const allBoards = document.getElementsByClassName('board')
const allBoards = document.querySelectorAll(".board");
const allItems = document.querySelectorAll(".item");

allItems.forEach(attachDragEvents);

allBoards.forEach((board) => {
    board.addEventListener("dragover", () => {
        const flyingElement = document.querySelector(".flying");
        // console.log(board, flyingElement);
        board.appendChild(flyingElement);
    });
});