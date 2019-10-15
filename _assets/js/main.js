// general js for the project that wouldn't be a reuseable component

////////////////////////////////////////////////////////////////////////////////
//    fatface product tabs
////////////////////////////////////////////////////////////////////////////////

// set variables
var sectionClass = 'js-tab-section';
var sections     = $('.' + sectionClass);
var contentClass = 'js-tab-content';
var contents     = $('.' + contentClass);
var activeClass  = 'active';
var dataClass    = 'tab-content';

function showTab(tabId){
  // remove active tab
  $('.' + sectionClass + '.' + activeClass).removeClass(activeClass);
  $('.' + contentClass + '.' + activeClass).removeClass(activeClass);
  // change the section header
  $.each(sections, function(i, section ){
    if( $(section).data(dataClass) === tabId ) {
      $(section).addClass(activeClass);
    }
  })
  // change the section content
  $.each(contents, function(i, content ){
    if( $(content).data(dataClass) === tabId ) {
      $(content).addClass(activeClass);
    }
  })
}

// show the first tab on page load
$([sections[0], contents[0]]).addClass(activeClass);

// change the tab on section click
$('.js-tab-section').on('click', function(e){
  e.preventDefault();
  showTab($(this).data('tab-content'));
})


////////////////////////////////////////////////////////////////////////////////
//    general animation
////////////////////////////////////////////////////////////////////////////////

// enable animations if browser supports them
if ( Modernizr.csstransforms && Modernizr.csstransitions ) {
  $('html').removeClass('no-animations');
}

// animate when element is on page
(function() {
  var elements;
  var windowHeight;
  function init() {
    elements = $('.animated');
    windowHeight = window.innerHeight;
  }
  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;
      if (positionFromTop - (windowHeight - 200) <= 0) {
        element.classList.add(element.dataset.animation);
      }
    }
  }
  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);
  init();
  checkPosition();
})();