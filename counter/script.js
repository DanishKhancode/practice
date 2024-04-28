let add = document.querySelector("#add");
let sub = document.querySelector("#sub");
let zero = document.querySelector("#zero");
let reset = document.querySelector("#reset");
let curr = 0;
add.addEventListener("click", () => {
    curr++;
    zero.innerHTML = curr;
})
sub.addEventListener("click", () => {
    if (curr <= 0) {
        return;
    } else {
        curr--;
        zero.innerHTML = curr;
    }
})
reset.addEventListener("click", () => {
    curr = 0;
    zero.innerHTML = curr;
})