const taskInput= document.querySelector("#task-input");
const addBtn= document.querySelector("#addBtn");
const taskList=document.querySelector("#task-list");
const filterBtns = document.querySelectorAll(".filter-btn");

let tasks = [
    {text:"btvn", done: false},
    {text:"dọn nhà", done: false}
];
let currentFilter = "all";
function addTasks(){
    let text = taskInput.value;
if (text === ""){
    alert ("Vui lòng nhập nội dung công việc.");
    return;
}
tasks.push({ text: text, done: false });
 
  taskInput.value = "";
  render();
}
function deleteTask(index){
    tasks.splice(index,1);
    render();
}
function toggleTask(index){
    if (tasks[index].done === true){
        tasks[index].done = false;
    }else{
        tasks[index].done = true;
    }
    render();
}
function render() {
    taskList.innerHTML="";
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        let hienThi = true;
        if (currentFilter === "active" && task.done === true) {
            hienThi = false;
    }
        if (currentFilter === "done" && task.done === false) {
            hienThi = false;
    }
        if (hienThi === true) {
            const li = document.createElement("li")
            li.className = "task-item";
            const checkbox = document.createElement("input")
            checkbox.type = "checkbox";
            checkbox.className = "task-checkbox";
            checkbox.checked = task.done;
            const span = document.createElement("span");
            span.textContent = task.text;
            span.className = "task-text";
            if (task.done == true){
                span.className = "task-text done";
        }
            const delBtn = document.createElement("button");
            delBtn.className = "delete-btn";
            delBtn.textContent = "X"
            checkbox.addEventListener("change",function(){
                toggleTask(i);
        });
            delBtn.addEventListener("click",function(){
                deleteTask(i);
        });
            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(delBtn);
            taskList.appendChild(li);


    }

    }
}
addBtn.addEventListener("click",function(){
    addTasks();
});
for(let j = 0 ; j < filterBtns.length;j++){
    filterBtns[j].addEventListener("click",function(){
        for(let k = 0 ; k < filterBtns.length;k++){
            filterBtns[k].className = "filter-btn";
        }
        this.className = "filter-btn active";
    currentFilter = this.getAttribute("data-filter");
    render();
    });
}
render();
taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTasks();
    }
});