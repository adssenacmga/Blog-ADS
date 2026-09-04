
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
    function showSlide(index) {
      if (index >= slides.length) {
        currentSlide = 0;
      }
      else if (index < 0) {
        currentSlide = slides.length - 1;
      }
      else {
        currentSlide = index;
      }
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });
      slides[currentSlide].classList.add("active");
    }

    function changeSlide(direction) {
      showSlide(currentSlide + direction);
    }

    function goToSlide(index) {
      showSlide(index);
    }

    setInterval(() => {
      changeSlide(1);
    }, 5000);
