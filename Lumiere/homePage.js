let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds (5000 milliseconds)
}


//slides
// document.addEventListener('DOMContentLoaded', function() {
//   const images = document.querySelectorAll('.image-item');
//   let currentImageIndex = 0;

//   function showImage(index) {
//       images.forEach((image, i) => {
//           if (i === index) {
//               image.style.display = 'block';
//           } else {
//               image.style.display = 'none';
//           }
//       });
//   }

//   document.getElementById('prev-slide').addEventListener('click', function() {
//       currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
//       showImage(currentImageIndex);
//   });

//   document.getElementById('next-slide').addEventListener('click', function() {
//       currentImageIndex = (currentImageIndex + 1) % images.length;
//       showImage(currentImageIndex);
//   });

//   showImage(currentImageIndex);
// });

document.addEventListener('DOMContentLoaded', function () {
  const imageBoxes = document.querySelectorAll('.image-box');
  let currentIndex = 0;

  function updateSlider() {
      imageBoxes.forEach((box, index) => {
          const offset = index - currentIndex;
          box.style.transform = `translateX(${offset * 220}px)`;
      });
  }

  document.getElementById('prev-slide').addEventListener('click', function () {
      currentIndex = (currentIndex - 1 + imageBoxes.length) % imageBoxes.length;
      updateSlider();
  });

  document.getElementById('next-slide').addEventListener('click', function () {
      currentIndex = (currentIndex + 1) % imageBoxes.length;
      updateSlider();
  });

  updateSlider();

//   const cursor = document.getElementById("custom-cursor");

// document.addEventListener("mousemove", (e) => {
//     cursor.style.left = e.clientX + "px";
//     cursor.style.top = e.clientY + "px";
// });
});


