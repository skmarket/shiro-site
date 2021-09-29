let boxes = document.querySelectorAll(".IO");
let boxesArray = Array.prototype.slice.call(boxes, 0);
let options = {
  root: null,
  rootMargin: "0px 50%",
  threshold: 0,
};
let observer = new IntersectionObserver(doWhenIntersect, options);
boxesArray.forEach(function (box) {
  observer.observe(box);
});

function doWhenIntersect(entries) {
  let entriesArray = Array.prototype.slice.call(entries, 0);
  entriesArray.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}
