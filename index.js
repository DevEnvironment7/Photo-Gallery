// Here we go javaScript

const lightbox = {
  gallery: document.querySelector(".gallery"),
  panel2: document.querySelector(".panel2"),
  init: function () {
    this.container = document.createElement("div");
    this.container.id = "zoombox";
    document.body.appendChild(this.container);

    this.zoomboxImg = document.createElement("img");
    this.container.appendChild(this.zoomboxImg);

    this.loadImages();
  },
  loadImages: function (keywordsArr, defSize = "200x200") {
    let keywords = [
      "cosmos",
      "galaxy",
      "milkway",
      "blackhole",
      "comet",
      "planet",
      "planets",
      "rocket",
      "orbit",
    ];
    if (keywordsArr) keywords = keywordsArr;

    let htmlCode = "";

    for (let keyword of keywords) {
      keyword = keyword.trim().toLowerCase();

      const url = `https://source.unsplash.com/${defSize}?${keyword}`;
      htmlCode += `<img src="${url}">`;
    }
    this.gallery.innerHTML = htmlCode;

    this.addEventListeners();
  },
  addEventListeners: function () {
    const images = document.querySelectorAll(".gallery img");
    images.forEach((img) => {
      img.addEventListener("click", (event) => this.galleryImgClicked(img));
    });

    this.container.addEventListener("click", (event) => {
      this.hide();
    });
  },
  galleryImgClicked: function (img) {
    this.show(img);
  },
  show: function (img) {
    this.zoomboxImg.src = img.src;
    this.container.classList.add("active");
  },
  hide: function () {
    this.container.classList.remove("active");
  },
};

lightbox.init();

const input = document.querySelector("input");

input.addEventListener("change", updateValue);
input.addEventListener("mousemove", updateValue);

function updateValue() {
  console.log(this.value);
  let moveProc = document.querySelector("span");
  moveProc.textContent = this.value;

  document.documentElement.style.setProperty("--light", this.value / 125);
}

