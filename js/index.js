



var $grid = $('.grid').isotope({
  // options
  itemSelector: '.grid .col-md-3',
  percentPosition: true,
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});