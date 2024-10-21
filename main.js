import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';





const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
      delay: 5000, 
      disableOnInteraction: true,
  },
  speed: 500,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
});


