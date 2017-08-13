// Конструктор галерии
function Slider(settings) {
  this.btnPrev = document.querySelector(settings.prev);
  this.btnNext = document.querySelector(settings.next);

  this.selector = document.querySelector(settings.parent) || 
                  document.querySelectorAll(settings.children);

  this.autoScroll = settings.auto || false;
  this.autoScrollTime = settings.time || 7000;
  this.len = this.selector.length || this.selector.children.length;

  this.count = 0;
  this.countDots = 0;

  this.scrollStyle = settings.scrollStyle;
  
  if (settings.dots !== undefined) {
    this.dots = document.querySelectorAll(settings.dots);
    this.galleryDots.call(this);
  }
  
  if (this.scrollStyle === 'gallery') { this.gallery(); } 
  if (this.scrollStyle === 'carousel') { this.carousel(); }

}


Slider.prototype.gallery = function () {
  this.btnNext.addEventListener("click", this.nextGallery.bind(this));
  this.btnPrev.addEventListener("click", this.prevGallery.bind(this));

  // Автоматическое перелистывание
  if (this.autoScroll) {
    setInterval( () => {
      this.nextGallery();
    }, this.autoScrollTime);
  }
};


Slider.prototype.carousel = function () {
  this.btnNext.addEventListener("click", this.nextCarousel.bind(this));
  this.btnPrev.addEventListener("click", this.prevCarousel.bind(this));

  // Автоматическое перелистывание
  if (this.autoScroll) {
    setInterval( () => {
      this.nextCarousel();
    }, this.autoScrollTime);
  }

};


Slider.prototype.nextGallery = function () {

  if (this.dots !== undefined) {
    this.dotsNext.call(this, this.selector.length);
  }

  this.selector[this.count].classList.remove('active');

  this.count++;

  if (this.count >= this.selector.length) {
      this.count = 0;
  }

  this.selector[this.count].classList.add('active');
};
  
// Преведущий слайд
Slider.prototype.prevGallery = function () {
  
  if (this.dots !== undefined) {
    this.dotsPrev.call(this, this.selector.length);
  }

  this.selector[this.count].classList.remove('active');
  this.count--;

  if (this.count < 0) {
    this.count = this.selector.length - 1;
  }

  this.selector[this.count].classList.add('active');
};


Slider.prototype.nextCarousel = function () {

  if (this.dots !== undefined) {
    this.dotsNext.call(this, this.len);
  }
  
  this.count++;
  console.log(this.count);

  if (this.count >= this.len) {
    this.count = 0;
  }

  this.selector.style.transform = "translateX(-" + this.count + "00%)";
};


Slider.prototype.prevCarousel = function () {


  if (this.dots !== undefined) {
    this.dotsPrev.call(this, this.len);
  }

  this.count--;

  if (this.count < 0) {
    this.count = this.len - 1;
  }

  this.selector.style.transform = "translateX(-" + this.count + "00%)";
};


Slider.prototype.galleryDots = function () {
  for ( let i = 0; i < this.dots.length; i++ ) {
    this.dots[i].addEventListener('click', this.getDotsNumber.bind(this));
  }
}; 


Slider.prototype.getDotsNumber = function (e) {
  this.dotsNumbers = e.target.getAttribute('data-gallery-dots');
  this.countDots = +this.dotsNumbers;

  if (this.scrollStyle === 'gallery') { this.changeSlide(); } 
  if (this.scrollStyle === 'carousel') { this.carouselDots(); }
  
}; 


Slider.prototype.changeSlide = function () {
  this.count = this.countDots;

    
  for ( let i = 0; i < this.selector.length; i++ ) {
    this.selector[i].classList.remove('active');
    this.dots[i].classList.remove('active');
  }
  this.selector[this.count].classList.add('active');
  this.dots[this.count].classList.add('active');
};


Slider.prototype.carouselDots = function () {
  this.count = this.countDots;

  for ( let i = 0; i < this.dots.length; i++ ) {
    this.dots[i].classList.remove('active');
  }
  
  this.selector.style.transform = "translateX(-" + this.countDots + "00%)";
  this.dots[this.countDots].classList.add('active');
};


Slider.prototype.dotsNext = function (len) {

  this.dots[this.countDots].classList.remove('active');
  this.countDots++;

  if (this.countDots >= len) {
      this.countDots = 0;
  }

  this.dots[this.countDots].classList.add('active');
};


Slider.prototype.dotsPrev = function (len) {
  this.dots[this.countDots].classList.remove('active');
  this.countDots--;

  if (this.countDots < 0) {
    this.countDots = len - 1;
  }

  this.dots[this.countDots].classList.add('active');
};





// Галерея Opacity
let galleryTeam = new Slider ({
  prev: ".gallery__control [data-gallery=prev]",
  next: ".gallery__control [data-gallery=next]",
  children: ".gallery__item",
  scrollStyle: "gallery"
});




// Carusel
let caruselTest = new Slider ({
  prev: ".carusel__control [data-carusel=prev]",
  next: ".carusel__control [data-carusel=next]",
  parent: ".carusel__list",
  dots: ".car__dots span",
  scrollStyle: "carousel"
});



/*
 

3.Подумать где писать стили css
4. Попробувать сделать свайпинг
5.Авторотация всегда должна останавливаться при наведении курсора (42% так не делают)
6.Авторотация должна полностью прекратиться после активного взаимодействия с пользователем




*/


