const nextElem = document.getElementsByClassName(`carousel-item`)[2];
const prevElem = document.getElementsByClassName(`carousel-item`)[0];
const prev = document.getElementById(`prev-btn`);
const next = document.getElementById(`next-btn`);
console.log(nextElem.classList.value);
console.log(prevElem.classList.value);
console.log(prevElem.classList.value == `carousel-item active`);

function prevBtn() {
  if (nextElem.classList.value == `carousel-item`) {
    prev.classList.toggle(`off`);
  } else {
    next.classList.toggle(`off`);
  }
}

function nextBtn() {
  if (prevElem.classList == `carousel-item`) {
    next.classList.toggle(`off`);
  } else {
    prev.classList.toggle(`off`);
  }
}
