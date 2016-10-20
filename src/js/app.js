$('#login').submit(function(event) {
  event.preventDefault();
  new User(loginValues());
  checkUsers();
});

function loginValues() {
       var context = {
           username: $('#username').val(),
           password: $('#password').val(),
       };
       return context;
   }

   function User(context) {
     this.info = {
      username: context.username,
      password: context.password,
      firstName: things, //?
      lastName:  things,//?
      gamesPlayed:  things,//?
      points: things,//?
    };
   }

   var guesses = 0;

   $(init);

   function init() {

  //Hide winMessage
     $('#winMessage').hide();
  $('#winMessage').css( {
    left: '580px',
    top: '250px',
    width: 0,
    height: 0
  } );

  // reset the game




//make items draggable
$('.items').draggable({
      containment: '#content',  //only allows dragged item to be within #content container
      snap: true,
    } );

//make potato droppable, hot potato
$('#potato').droppable({
     accept: '.items',
     hoverClass: 'hovered',  //optional
     drop: handleItemDrop    // function called once item is dropped
});

function handleItemDrop(event, ui) {
  ui.draggable.draggable( 'disable' );
   $(this).droppable( 'disable' );


}

  }
