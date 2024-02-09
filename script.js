const btns = document.querySelectorAll("button");
const overlay = document.querySelector(".overlay");

// btn.onclick = function() {
//     alert("Click");
// };

// btn.onclick = function() {
//     alert("Second click");
// };

// btn.addEventListener("click", () => {
//     alert("Click");
// });

// btn.addEventListener("click", () => {
//     alert("Second click");
// });

let i = 0;
const deleteElement = (event) => {
    // event.target.remove();
    console.log(event.target);
    console.log(event.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener("click", deleteElement);
    // }
}

// btn.addEventListener("click", deleteElement);
// overlay.addEventListener("click", deleteElement);

btns.forEach(btn => {
    btn.addEventListener("click", deleteElement, {once: true}); // Обработчик события сразу на несколько елементов
});

const link = document.querySelector("a");

link.addEventListener("click", function(event) {
    event.preventDefault();

    console.log(event.target);
});