// general js for the project that wouldn't be a reuseable component

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