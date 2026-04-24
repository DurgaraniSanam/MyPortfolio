const texts = [
  "IT Undergraduate",
  "Aspiring Django Developer",
  "AI/ML  Enthiusiast",
];

let i = 0;
let j = 0;
let isDeleting = false;

function type() {
  let current = texts[i];
  let display = document.getElementById("typing-text");

  if (!isDeleting) {
    display.textContent = current.substring(0, j + 1);
    j++;

    if (j === current.length) {
      isDeleting = true;
      setTimeout(type, 1200);
      return;
    }
  } else {
    display.textContent = current.substring(0, j - 1);
    j--;

    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % texts.length;
    }
  }

  setTimeout(type, isDeleting ? 40 : 70);
}

type();

function openImg(src){
document.getElementById("popup").style.display="flex";
document.getElementById("popup-img").src = src;
}

function closeImg(){
document.getElementById("popup").style.display="none";
}
