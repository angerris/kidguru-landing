document.addEventListener("DOMContentLoaded", function () {
  const featureCards = document.querySelectorAll(".feature-card");
  const featureImage = document.querySelector(".feature-image-wrapper img");
  function updateCardImage(card) {
    featureCards.forEach((card) => card.classList.remove("active"));
    card.classList.add("active");
    const newImage = card.getAttribute("data-image");
    featureImage.classList.remove("loaded");
    featureImage.src = `./img/${newImage}`;
    featureImage.onload = () => {
      featureImage.classList.add("loaded");
    };
  }
  featureCards.forEach((card) => {
    card.addEventListener("click", function () {
      updateCardImage(this);
    });
  });

  const activeCard = document.querySelector(".feature-card.active");
  if (activeCard) {
    updateCardImage(activeCard);
  }
});
