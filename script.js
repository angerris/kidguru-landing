document.addEventListener("DOMContentLoaded", function () {
  const featureCards = document.querySelectorAll(".feature-card");
  const featureImage = document.querySelector(".features-images img");

  featureCards.forEach((card, index) => {
    card.addEventListener("click", function () {
      featureCards.forEach((c) => c.classList.remove("active"));
      card.classList.add("active");
      featureImage.src = `./img/${index + 1}.png`;
    });
  });

  featureImage.src = "./img/1.png";
});

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-container", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    pagination: false,
    navigation: false
  });

  document.querySelector(".arrow-left").addEventListener("click", function () {
    swiper.slidePrev();
  });

  document.querySelector(".arrow-right").addEventListener("click", function () {
    swiper.slideNext();
  });
});
