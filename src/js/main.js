// let user1 = new Slider ({
//   button: {
//     prev: ".slider_control [data-slider-button=prev]", // кнопка назад
//     next: ".slider_control [data-slider-button=next]" // кнопка вперед
//   },
//   slider_items: {
//     item: ".slider__list .slider__item" // слайдер item В нашем случаи тэш li
//   },
//   infinite_scrolling: true
// });



// function Slider(setting) {
//   this.btn_prev = document.querySelector(setting.button.prev);
//   this.btn_next = document.querySelector(setting.button.next);
//   this.slider_item = document.querySelectorAll(setting.slider_items.item);
  
//   let count = 0;
//   let self = this;


// // Шаг вперед
//  this.next = function () {

//     self.slider_item[count].classList.remove('active');
//     count++;

//     if (count >= self.slider_item.length) {
//       count = 0;
//     }

//     self.slider_item[count].classList.add('active');

//  };
  
// // Шаг Назад
//  this.prev = function () {
//   self.slider_item[count].classList.remove('active');
//   count--;

//   if (count < 0) {
//       count = self.slider_item.length - 1;
//   }

//   self.slider_item[count].classList.add('active');
//  };


//  this.btn_prev.addEventListener('click', this.prev);
//  this.btn_next.addEventListener('click', this.next);


// }

// let se = ['d', 123, 'asdwae', 'de'];


// let ooo = document.querySelectorAll('p');

// for(let item of se) {


//   console.log(item);

// }


class Slider {
  constructor (option) {
    this.btn_next = document.querySelector(option.btn.next);
  }



  open () {
    console.log(this.btn_next);
    console.log(123);
  }
}





let slider1 = new Slider ({
  btn: {
    next: ".slider__button"
  }
});

slider1.open();



