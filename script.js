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
  const controls = document.querySelectorAll(".feature-control");
  const featureImage = document.getElementById("feature-image");
  let currentFeature = 0;
  let startX = 0;

  function showFeature(index) {
    controls.forEach((control, i) => {
      control.classList.toggle("active", i === index);
    });
    const newImage = controls[index].getAttribute("data-image");
    featureImage.src = `./img/${newImage}`;
  }

  document.querySelectorAll(".arrow-left").forEach((arrow) => {
    arrow.addEventListener("click", function () {
      currentFeature = (currentFeature - 1 + controls.length) % controls.length;
      showFeature(currentFeature);
    });
  });

  document.querySelectorAll(".arrow-right").forEach((arrow) => {
    arrow.addEventListener("click", function () {
      currentFeature = (currentFeature + 1) % controls.length;
      showFeature(currentFeature);
    });
  });

  const featuresContainer = document.querySelector(".features-mobile-images");

  featuresContainer.addEventListener("touchstart", function (e) {
    startX = e.touches[0].clientX;
    e.preventDefault();
  });

  featuresContainer.addEventListener("touchmove", function (e) {
    e.preventDefault();
    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;

    if (Math.abs(diffX) > 10) {
      if (diffX > 0) {
        currentFeature = (currentFeature + 1) % controls.length;
      } else {
        currentFeature =
          (currentFeature - 1 + controls.length) % controls.length;
      }
      showFeature(currentFeature);
      startX = currentX;
    }
  });

  featuresContainer.addEventListener("touchend", function () {
    startX = 0;
  });

  showFeature(currentFeature);
});
