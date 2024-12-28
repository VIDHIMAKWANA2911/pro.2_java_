let slides = [
  {
    image:
      "https://timesproweb-static-backend-prod.s3.ap-south-1.amazonaws.com/Web_Development_Banner_Image_0e476d1ab6.webp",
    title: "SLIDE 1",
    description: "THIS IS FIRST SLIDE",
  },
  {
    image:
      "https://i.pinimg.com/originals/71/b8/59/71b8597599e9f5d7fa269dfdfff73367.jpg",
    title: "SLIDE 2",
    description: "THIS IS SECOND SLIDE",
  },
  {
    image:
      "https://img.freepik.com/free-photo/credit-cards_144627-16725.jpg?semt=ais_hybrid",
    title: "SLIDE 3",
    description: "THIS IS THIRD SLIDE",
  },
  {
    image:
      "https://png.pngtree.com/background/20220720/original/pngtree-notebook-computer-electronic-equipment-science-and-technology-particles-picture-image_1677481.jpg",
    title: "SLIDE 4",
    description: "THIS IS FOURTH SLIDE",
  },
  {
    image:
      "https://png.pngtree.com/thumb_back/fw800/background/20230930/pngtree-web-development-concept-programming-and-coding-illustrated-in-3d-image_13511770.png",
    title: "SLIDE 5",
    description: "THIS IS FIFTH SLIDE",
  },
];

let currentIndex = 0;

const showSlide = () => {
  const slide = slides[currentIndex];
  document.getElementById("img").src = slide.image;
  document.getElementById("slide-title").innerHTML = slide.title;
  document.getElementById("slide-description").innerHTML = slide.description;
};

document.getElementById("next-btn").addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide();
});

document.getElementById("pre-btn").addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide();
});

showSlide();

let autoSlideInterval;

let startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
    showSlide();
  }, 2000);
};

let stopAutoSlide = () => {
  clearInterval(autoSlideInterval);
};

startAutoSlide();

setTimeout(() => {
  stopAutoSlide();
}, 10000);
