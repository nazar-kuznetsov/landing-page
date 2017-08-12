//  Следующий слайд
Slider.prototype.dotsNext = function () {
  this.dots[this.countDots].classList.remove('active');

  this.countDots++;

  if (this.countDots >= this.galleryItem.length) {
      this.countDots = 0;
  }

  this.dots[this.countDots].classList.add('active');

};


Slider.prototype.dotsPrev = function () {

this.dots[this.countDots].classList.remove('active');


  this.countDots--;

  if (this.countDots < 0) {
    this.countDots = this.galleryItem.length - 1;
  }

  this.dots[this.countDots].classList.add('active');


};


Slider.prototype.nextSlide = function () {

  console.log(12);
  if (this.dots !== undefined) {
    this.dotsNext.call(this);
  }

  this.galleryItem[this.count].classList.remove('active');


  this.count++;

  if (this.count >= this.galleryItem.length) {
      this.count = 0;
  }

  this.galleryItem[this.count].classList.add('active');


};

// // Преведущий слайд
Slider.prototype.prevSlide = function () {

  if (this.dots !== undefined) {
    this.dotsPrev.call(this);
  }


  this.galleryItem[this.count].classList.remove('active');


  this.count--;

  if (this.count < 0) {
    this.count = this.galleryItem.length - 1;
  }

  this.galleryItem[this.count].classList.add('active');
 
};


Slider.prototype.galleryDots = function () {
  for ( let i = 0; i < this.dots.length; i++ ) {
    this.dots[i].addEventListener('click', this.getDotsNumber.bind(this));
  }
}; 


Slider.prototype.changeSlide = function () {

  this.count = this.countDots;
  
  for ( let i = 0; i < this.galleryItem.length; i++ ) {
    this.galleryItem[i].classList.remove('active');
    this.dots[i].classList.remove('active');
  }

  this.galleryItem[this.count].classList.add('active');
  this.dots[this.count].classList.add('active');

};


Slider.prototype.getDotsNumber = function (e) {
  this.dotsNumbers = e.target.getAttribute('data-gallery-dots');
  this.countDots = +this.dotsNumbers;
  this.changeSlide();
  
}; 




Slider.prototype.nextCarusel = function () {
  this.count++;

  if (this.count >= this.galleryItem.children.length) {
    this.count = 0;
  }

  this.galleryItem.style.transform = "translateX(-" + this.count + "00%)";

};


Slider.prototype.prevCarusel = function () {
  this.count--;
  
    if (this.count < 0) {
      this.count = this.galleryItem.children.length - 1;
    }
  
    this.galleryItem.style.transform = "translateX(-" + this.count + "00%)";
};




// Конструктор галерии
function Slider(obj) {
  this.prev = document.querySelector(obj.prev);
  this.next = document.querySelector(obj.next);
  this.count = 0;
  this.countDots = 0;
  
  // Значение по умолчание для autoSlider
  if (obj.time === undefined) { obj.time = 8000; }
  
  
  if (obj.dots !== undefined) {
    this.dots = document.querySelectorAll(obj.dots);
    this.galleryDots.call(this);
  }
  
  
  
  // Автоматическое перелистывание
  if (obj.auto) {
    setInterval( () => {
      this.nextSlide();
    }, obj.time);
  }
  
  
  if (obj.sliderStyle === 'gallery') {
    
    this.galleryItem = document.querySelectorAll(obj.gallery);

    this.next.addEventListener("click", this.nextSlide.bind(this));
    this.prev.addEventListener("click", this.prevSlide.bind(this));

  } else if (obj.sliderStyle === 'carusel') {
    this.galleryItem = document.querySelector(obj.gallery);

    this.next.addEventListener("click", this.nextCarusel.bind(this));
    this.prev.addEventListener("click", this.prevCarusel.bind(this));

  }



}


// Галерея Opacity
let galleryTeam = new Slider ({
  prev: ".gallery__control [data-gallery=prev]",
  next: ".gallery__control [data-gallery=next]",
  gallery: ".gallery__item",
  sliderStyle: "gallery"
});







// Carusel
let caruselTest = new Slider ({
  prev: ".carusel__control [data-carusel=prev]",
  next: ".carusel__control [data-carusel=next]",
  gallery: ".carusel__list",
  sliderStyle: "carusel"
});





// Доделать Dots
// Доделать авто слайдер
// Подумать где писать стили css
