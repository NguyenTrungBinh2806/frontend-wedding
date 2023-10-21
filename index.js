document.getElementById("next").onclick = function () {
  const widthItem = document.querySelector(".item").offsetWidth;
  document.getElementById("formList").scrollLeft += widthItem;
};
document.getElementById("prev").onclick = function () {
  const widthItem = document.querySelector(".item").offsetWidth;
  document.getElementById("formList").scrollLeft -= widthItem;
};

// scroll to the area when click header is clicked
const overlay = document.querySelector("#overlay");

document.querySelector("#header").addEventListener("click", function () {
  overlay.classList.toggle("show");
});
