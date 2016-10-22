<<<<<<< HEAD
<<<<<<< HEAD
$('#login').submit(function(event) {
  event.preventDefault();
  // new User(loginValues());
  loginValues();
});

function loginValues() {
       var context = {
           username: $('#username').val(),
           password: $('#password').val(),
       };
       return context;
   }
=======
>>>>>>> 9c72b6351177442ba07a20b7f52b4fc0bf19128d

(function($) {

  /**************************************
  Mr. Potato Who Game
  **************************************/
  function PotatoGame() {
    console.log(this);
    this.pageNav();
  }

  /**************************************
  Click to Pages
  **************************************/
  PotatoGame.prototype.pageNav = function() {

    this.leaderboard = function() {
      $('.leaderpage').on('click', function() {
        location.href = "leaderboard.html";
      });
    };
    this.leaderboard();

    this.game = function() {
      $('.logo').on('click', function() {
        location.href = "game.html";
      });
    };
    this.game();

  };

  new PotatoGame();

})(jQuery);
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
<<<<<<< HEAD
>>>>>>> 73294ada5ce04505fa6fac2b4ff56d7ca0844b66
=======

$('#login').submit(function(event) {
  event.preventDefault();
  // new User(loginValues());
  loginValues();
});

function loginValues() {
       var context = {
           username: $('#username').val(),
           password: $('#password').val(),
       };
       return context;
   }

   function checkUsers(context) {
    $.ajax({
        "method": "GET",
        "url": '/login' + context,
        "data": {},
        "datatype": "json",
        "success": function(data) {

            }
        });
}
>>>>>>> 9c72b6351177442ba07a20b7f52b4fc0bf19128d
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
//make items draggable
$('.drag').draggable({
      containment: '#content',  //only allows dragged item to be within #content container
      snap: true,
    } );

//make potato droppable, hot potato
$('.potatoboard').droppable({
     accept: '.drag',
     hoverClass: 'hovered',  //optional
     drop: handleItemDrop    // function called once item is dropped
});

function handleItemDrop(event, ui) {
  ui.draggable.draggable( 'disable' );
   $(this).droppable( 'disable' );


}
//
//   }
// $('#login').submit(function(event) {
//   event.preventDefault();
//   console.log(hey);
//   //loginValues();
//
// });

// function loginValues() {
//        var context = {
//            username: $('#username').val(),
//            password: $('#password').val(),
//        };
//        checkUsers(context);
//        console.log(context);
//    }
//
// function checkUsers(context) {
//     $.ajax({
//         "method": "GET",
//         "url": '/login + context',
//         "data": {},
//         "datatype": "json",
//         "success": function(data) {
//           console.log(data);
//             }
//         });

// function init() {
//  $('.drag').draggable( {
//       snap: true,
//     });
//
// //make potato droppable, hot potato
// $('#potatoBoard').droppable({
//      accept: '.drag',
//      hoverClass: 'hovered',  //optional
//      drop: handleItemDrop    // function called once item is dropped
// });
//
// function handleItemDrop(event, ui) {
//   ui.draggable.draggable( 'disable' );
//    $(this).droppable( 'disable' );
// }
// }

function init() {
  console.log("hey");
}
 init();
