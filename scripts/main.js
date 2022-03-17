$('td').handleClick(function() {
    $(this).css('backgroundColor', '#FF0000');
 });


//  $('table').on('click', 'td', function() {
//     $(this).css('color', '#FF0000');
//  });



$( "td" ).on( "mouseover", function() {
    $( this ).css( "background-color", "red" );
  });


  $( "td" )
  .on( "mouseenter", function() {
    $( this ).css({
      "background-color": "yellow",
      "font-weight": "bolder"
    })
  })