const data = document.getElementById("data");
const orderd = document.getElementById("order");
 
function add() {
    if (data.value === " ") {
        return
    } else {
        let li = document.createElement("li");
        li.innerHTML = data.value;
        orderd.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    data.value = " ";
}
orderd.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
})