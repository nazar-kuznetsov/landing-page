let sliderHeader = new Slider ({
  button: {
    prev: ".slider_control [data-slider-button=prev]", // кнопка назад
    next: ".slider_control [data-slider-button=next]" // кнопка вперед
  },
  slider_item: {
    item: ".slider__list .slider__item" // слайдер item В нашем случаи тэш li
  },
  infinite_scrolling: true
});


function Slider(setting) {
  this.btn_prev = document.querySelector(setting.button.prev);
  this.btn_next = document.querySelector(setting.button.next);
  this.slider_item = document.querySelectorAll(setting.slider_item.item);
  
  let count = 0;
  let self = this;


// Шаг вперед
 this.next = function () {
   console.log(count);
    self.slider_item[count].classList.remove('active');
    count++;

    if (count >= self.slider_item.length) {
      count = 0;
    }

    self.slider_item[count].classList.add('active');

 };
  
// Шаг Назад
 this.prev = function () {
  self.slider_item[count].classList.remove('active');
  count--;

  if (count < 0) {
      count = self.slider_item.length - 1;
  }

  self.slider_item[count].classList.add('active');
 };


 this.btn_prev.addEventListener('click', this.prev);
 this.btn_next.addEventListener('click', this.next);
  
}
