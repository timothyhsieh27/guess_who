
(function($) {

  /**************************************
  Mr. Potato Who Game
  **************************************/
  function PotatoGame() {
    this.pageNav();
    this.potatoBoard();
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

  /**************************************
  When users click on prop, it will appear on potato
  **************************************/
  PotatoGame.prototype.potatoBoard = function() {
    $('.prop').on('click', 'img', function() {
      var image = $(this).attr("src");

      if(image === '/app/assets/images/glasses.svg') {
        $('.propFeatures .glasses').show();
      } else if(image === '/app/assets/images/hat.svg') {
        $('.propFeatures .hat').show();
      } else if(image === '/app/assets/images/bow-tie.svg') {
        $('.propFeatures .bow-tie').show();
      } else if(image === '/app/assets/images/mustache.svg') {
        $('.propFeatures .mustache').show();
      } else if(image === '/app/assets/images/tattoo.svg') {
        $('.propFeatures .tattoo').show();
      } else if(image === '/app/assets/images/fork.svg') {
        $('.propFeatures .fork').show();
      }
    });
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

// //make items draggable
// $('.drag').draggable({
//       snap: true
//     } );

// //make potato droppable, hot potato
// $('.potatoboard').droppable({
//      accept: '.drag',
//      drop: handleItemDrop()    // function called once item is dropped
// });
//
// function handleItemDrop(event, ui) {
//   ui.draggable.draggable( 'disable' );
//   $(this).droppable( 'disable' );
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
