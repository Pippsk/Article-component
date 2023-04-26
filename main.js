const shareBtn1 = document.querySelector(".footer_link1");
const shareBtn2 = document.querySelector(".footer_link2");

const firstFooter = document.querySelector(".footer");
const secondFooter = document.querySelector(".second_footer");
console.log(shareBtn1);
console.log(shareBtn2);
console.log(secondFooter);
console.log(firstFooter);

shareBtn1.addEventListener("click", function () {
  secondFooter.classList.toggle("hidden");
});

shareBtn2.addEventListener("click", function () {
  secondFooter.classList.toggle("hidden");
});
