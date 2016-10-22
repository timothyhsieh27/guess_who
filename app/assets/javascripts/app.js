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

function checkExisting(context) {
    $.ajax({
        "method": "GET",
        "url": '/login/users' + context,
        "data": {},
        "datatype": "json",
        "success": function(data) {
            for (var index = 0; index.length; index++) {
                if (data.username == context.username)
                    if (data.password == context.password) {
                        window.location.replace("/instructions");
                    } else {
                        window.location.replace("/login");
                    }
            }

        }
    });
}

function UserData(userObj) {
    this.info = {
        username: userObj.username,
        password: userObj.password,
        totalpoints: userObj.total_points,

    };
}

$('#signup').submit(function(event) {
    event.preventDefault();
    // new User(loginValues());
    signUpValues();
});

function signUpValues() {
    var newContext = {
        username: $('#username').val(),
        password: $('#password').val(),
        confirm: $('#confirm').val()
    };
    if (this.newContext.password === this.newcontext.confirm) {
        checkUsername(newContext);
    } else {
        alert("Passwords do not match");
    }

}

function checkUsername(newContext) {
  $.ajax({
    "method": "GET",
    "url": '/login/users',
    "data": {},
    "datatype": "json",
    "success": function(data) {
      for (var index = 0; index.length; index++) {
        if (data.username == newContext.username) {
            alert("Username already exists");
        } else {
            postUser(newContext);
        }
          }
        }
    });
}

function postUser(newContext) {
  $.ajax({
    "method": "POST",
    "url": '/login/users',
    "data": {},
    "datatype": "json",
    "success": function(data) {
         window.location.replace('/instructions');
        }
    });
}

function update() {
  $.ajax({
      "method": "GET",
      "url": '/login/users' + context,
      "data": {},
      "datatype": "json",
      "success": function(data) {
          for (var index = 0; index.length; index++) {
          }
        }  
  });
}





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
    containment: '#content', //only allows dragged item to be within #content container
    snap: true,
});

//make potato droppable, hot potato
$('.potatoboard').droppable({
    accept: '.drag',
    hoverClass: 'hovered', //optional
    drop: handleItemDrop // function called once item is dropped
});

function handleItemDrop(event, ui) {
    ui.draggable.draggable('disable');
    $(this).droppable('disable');


}

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
