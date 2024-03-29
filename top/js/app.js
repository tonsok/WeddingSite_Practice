const swiper1 = new Swiper(".mainslides .swiper", {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 4000,
  },
  speed: 2000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiper2 = new Swiper(".bridelfair-slides .swiper", {
  slidesPerView: "auto",
  slidesPerGroupAuto: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const filterButtons = document.querySelectorAll("[data-filter]");

const categoryContents = document.querySelectorAll("[data-category]");

filterButtons.forEach((filterButton) => {
  filterButton.addEventListener("click", buttonSwitch);
  filterButton.addEventListener("click", categoryFilter);
});

function buttonSwitch() {
  filterButtons.forEach((filterButton) => {
    filterButton.classList.remove("is-active");
    this.classList.add("is-active");
  });
}

function categoryFilter() {
  const buttonCategory = this.dataset.filter;

  const targetContents = document.querySelectorAll(
    '[data-category="' + buttonCategory + '"]'
  );

  categoryContents.forEach((categoryContent) => {
    categoryContent.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 600,
      fill: "forwards",
    });

    if (buttonCategory == "all") {
      categoryContent.classList.add("is-show");
    } else {
      categoryContent.classList.remove("is-show");

      targetContents.forEach((targetContent) => {
        targetContent.classList.add("is-show");
      });
    }
  });
}

const headings = document.querySelectorAll(".contents-heading");

const options = {
  threshold: 1,
};

const observer = new IntersectionObserver(showElements);

headings.forEach((heading) => {
  observer.observe(heading);
});

function showElements(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}
