import { iosVhFix } from './utils/ios-vh-fix';
import { Form } from './modules/form-validate/form';
import initSliders from './modules/sliders/sliders';
import { Burger } from './modules/mobile-menu/burger';
import initVideo from './modules/video/video';
import initAudio from './modules/audio/audio';
import initLeaflet from './modules/map/map';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
    const burger = new Burger();
    burger.init();
    initAudio();
  });

  const formWrapper = document.querySelector('.form__wrapper');
  if (formWrapper) {
    formWrapper.addEventListener('submit', () => {
      window.form.validateForm(formWrapper);
    });
  }

  initVideo();
  initSliders();
  initLeaflet();
});
