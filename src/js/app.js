<<<<<<< HEAD
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

   function checkUsers(response) {
    $.ajax({
        "method": "GET",
        "url": 'https:' + response,
        "data": {},
        "datatype": "json",
        "success": function(data) {

            }
        });
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
  //Global variables
   var guesses = 0;

  //Initialize game on pageload
   $(init);

   function init() {

  //Hide winMessage (message that appears at the end of the game)
     $('#winMessage').hide();
     $('#winMessage').css( {
    // left: '580px',
    // top: '250px',
    // width: 0,
    // height: 0
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
=======


// $('#login').submit(function(event) {
//   event.preventDefault();
//   new User(loginValues());
//   checkUsers();
// });
//
// function loginValues() {
//        var context = {
//            username: $('#username').val(),
//            password: $('#password').val(),
//        };
//        return context;
//    }
//
//    function checkUsers(response) {
//     $.ajax({
//         "method": "GET",
//         "url": 'https:' + response,
//         "data": {},
//         "datatype": "json",
//         "success": function(data) {
//
//             }
//         });
// }
//
//    function User(context) {
//      this.info = {
//       username: context.username,
//       password: context.password,
//       firstName: things, //?
//       lastName:  things,//?
//       gamesPlayed:  things,//?
//       points: things,//?
//     };
//    }
//   //Global variables
//    var guesses = 0;
//
//   //Initialize game on pageload
//    $(init);
//
//    function init() {
//
//   //Hide winMessage (message that appears at the end of the game)
//      $('#winMessage').hide();
//      $('#winMessage').css( {
//     // left: '580px',
//     // top: '250px',
//     // width: 0,
//     // height: 0
//   } );
//
//   // reset the game
//
//
//
//
// //make items draggable
// $('.items').draggable({
//       containment: '#content',  //only allows dragged item to be within #content container
//       snap: true,
//     } );
//
// //make potato droppable, hot potato
// $('#potato').droppable({
//      accept: '.items',
//      hoverClass: 'hovered',  //optional
//      drop: handleItemDrop    // function called once item is dropped
// });
//
// function handleItemDrop(event, ui) {
//   ui.draggable.draggable( 'disable' );
//    $(this).droppable( 'disable' );
//
//
// }
//
//   }
>>>>>>> a29653adaa1980d314165d624443b341baba3f16
