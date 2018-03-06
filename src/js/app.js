import 'fullpage.js';
import fancyBox from '@fancyapps/fancybox';

$(document).ready(function() {

  $('#fullpage').fullpage({
  	navigation: true,
    navigationPosition: 'left',
    loopHorizontal: false,
    parallax: true,
    parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
  });

  if($('.js-fancybox').length > 0) {
    $('.js-fancybox').fancybox({});
  }
    
});
