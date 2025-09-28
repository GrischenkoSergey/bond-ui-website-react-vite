// ==================== web carousel =====================//
const slides = document.querySelectorAll('.sectionhead .slide');
const thumbs = document.querySelectorAll('.sectionhead .carousel-thumbnails img');
const track = document.querySelector('.sectionhead .carousel-thumbnails');
const btnNext = document.querySelector('.sectionhead .carousel-btn.next');
const btnPrev = document.querySelector('.sectionhead .carousel-btn.prev');
const descriptions = document.querySelectorAll('.sectionhead .description-item');


if (slides.length && thumbs.length) {
  let current = 0;
  const total = slides.length;
  let autoSlideInterval;
  console.log(descriptions.length)
  // Show specific slide
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      descriptions[i].classList.remove('active');
      thumbs[i].classList.remove('active-thumb');
    });
  
    slides[index].classList.add('active');
    descriptions[index].classList.add('active');
    thumbs[index].classList.add('active-thumb');
    current = index;
  }
  
  // Thumbnail click
  thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      clearInterval(autoSlideInterval);
      showSlide(index);
    });
  });
  
  // Auto play
  function nextSlide() {
    current = (current + 1) % total;
    showSlide(current);
  }
  
  autoSlideInterval = setInterval(nextSlide, 25000);
  
  // Manual buttons
  btnNext.addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    current = (current + 1) % total;
    showSlide(current);
  });
  
  btnPrev.addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    current = (current - 1 + total) % total;
    showSlide(current);
  });
  
  // Init
  showSlide(current);
}

// ================== mobile view ==================//
const mslides = document.querySelectorAll('#mobile-view .slide');
const mdescriptions = document.querySelectorAll('#mobile-view .description-item');
const mtrack = document.querySelector('#mobile-view .carousel-thumbnails');
const mbtnNext = document.querySelector('#mobile-view .carousel-btn.next');
const mbtnPrev = document.querySelector('#mobile-view .carousel-btn.prev');

if (mslides.length) {
  let current = 0;
  const total = mslides.length;
  // let autoSlideInterval;
  
  // Show specific slide
  function showSlide(index) {
    console.log(index)
    mslides.forEach((slide, i) => {
      mdescriptions[i].classList.remove('active');
      slide.classList.remove('active');
    });
    mslides[index].classList.add('active');
    mdescriptions[index].classList.add('active');
    current = index;
  }
  
  // Auto play
  function nextSlide() {
    current = (current + 1) % total;
    showSlide(current);
  }
  
  // autoSlideInterval = setInterval(nextSlide, 4000);
  
  // Manual buttons
  mbtnNext.addEventListener('click', () => {
    // clearInterval(autoSlideInterval);
    current = (current + 1) % total;
    showSlide(current);
  });
  
  mbtnPrev.addEventListener('click', () => {
    // clearInterval(autoSlideInterval);
    current = (current - 1 + total) % total;
    showSlide(current);
  });
  
  // Init
  showSlide(current);
}