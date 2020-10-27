/* eslint-disable */

// Fix viewport units for height
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// Common
import '../blocks/modules/common/quiz/quiz';

// Pages
import '../blocks/modules/pages/index/index';
import '../blocks/modules/pages/profile/profile';