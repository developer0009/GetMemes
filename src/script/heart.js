console.log("i ran");
setTimeout(() => {
  const element = document.getElementsByClassName("memes")[0];
  const heart = document.getElementsByClassName("heart")[0];
  console.log(heart, element);
  element &&
    element.addEventListener("dblclick", () => {
      heart && heart.classList.toggle("is-active");
    });
}, 1000);
