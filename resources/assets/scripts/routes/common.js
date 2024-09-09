import $ from 'jquery';

export default {
  init() {
    if($('.gallery_filters').length > 0 ){
      const urlParams  = new URLSearchParams(window.location.search);

      if(urlParams.has('service_type')){
        let service_type =  urlParams.get('service_type');
        $('.list-item > a ').removeClass('current');
        $("[data-target='" + service_type + "']").addClass('current');
      }
    }
    
  },
  finalize() {

  },
};
