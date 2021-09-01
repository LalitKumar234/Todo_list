console.log("todo list");

showTask();

let addTxt = document.getElementById("addTxt");
let addBtn = document.getElementById("addBtn");
let clrBtn = document.getElementById("clrBtn");



addBtn.addEventListener("click", function () {
    addTxtval = addTxt.value;
    if (addTxtval.trim() != 0) {

        let task = localStorage.getItem("localTask");
        if (task == null) {
            taskObj = [];
            addTxt.value = "";
            


        }
        else {
            taskObj = JSON.parse(task);
            addTxt.value = "";
            document.getElementById("demo").innerHTML = "";



        }
        taskObj.push(addTxtval);
        localStorage.setItem("localTask", JSON.stringify(taskObj));

    }else document.getElementById("demo").innerHTML = "*Please add some task!!";
    showTask();
})

function showTask() {
    let task = localStorage.getItem("localTask");
    if (task == null) {
        taskObj = [];

    }
    else {
        taskObj = JSON.parse(task);


    }
    let html = ``;
    let addedlist = document.getElementById("listItem");
    taskObj.forEach((item, index) => {
        html += `<li>${item}<i class="fas fa-trash-alt" onclick="deleteItem(${index})"></i></li>`;

    });
    addedlist.innerHTML = html;
}
clrBtn.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
})


function deleteItem(index){
    let task = localStorage.getItem("localTask");
    taskObj = JSON.parse(task);
    taskObj.splice(index, 1);
    localStorage.setItem("localTask", JSON.stringify(taskObj));
    showTask();


}

