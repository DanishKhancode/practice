const inputbox = document.querySelector("#input-box");
const listconatiner = document.querySelector("#list-conatiner");

function addTask() {
    if (inputbox.value === '') {
        alert("write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listconatiner.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = " ";
}
listconatiner.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
})

// const box = document.getElementById("input-box");
// const list = document.getElementById("list-conatiner");
// function addTask() {
//     if (box.value === '') {
//         alert("wright someting");
//     } else {
//         let li = document.createElement("li");
//         li.innerHTML = box.value;
//         list.appendChild(li);
//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";
//         li.appendChild(span);

//     }
//     box.value = " ";
// }
// list.addEventListener("click", function (e) {
//     if (e.target.tagName === "SPAN") {
//         e.target.parentElement.remove();
//     }
// })