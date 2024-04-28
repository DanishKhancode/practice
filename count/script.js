let count = document.querySelector("#count");
let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    for (let i = 0; i <= 10; i++){
        setTimeout(function () {
            count.innerHTML = i;
            console.log(i);
        }, 2000*i);
    }
})
