document.addEventListener("DOMContentLoaded", function () {
  const featureCards = document.querySelectorAll(".feature-card");
  const featureImage = document.querySelector(".features-images img");

  featureCards.forEach((card, index) => {
    card.addEventListener("click", function () {
      featureCards.forEach((c) => c.classList.remove("active"));
      card.classList.add("active");
      featureImage.src = `./img/${index + 1}.svg`;
    });
  });

  featureImage.src = "./img/1.svg";
});

document.addEventListener("DOMContentLoaded", function () {
  const controls = document.querySelectorAll(".feature-control");
  const featureImage = document.getElementById("feature-image");
  let currentFeature = 0;

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

  showFeature(currentFeature);
});
