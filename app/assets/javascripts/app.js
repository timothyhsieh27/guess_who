//On pageload instructions pop up
$(function(){
  $('#game-instructions').hide().fadeIn(2500);
  $('#flying-pot').hide();
});
//make them go away
$('#close').click(function(){
  $('#game-instructions').fadeOut().hide(2000);
});
//Login/Signup listeners
$('#login').click(function(event) {
    event.preventDefault();
    // new User(loginValues());
    loginValues();
});

$('#signup').click(function(event) {
    event.preventDefault();
    signUpValues();
});
//object to pass into ajax
function loginValues() {
    var context = {
        username: $('#username').val(),
        password: $('#password').val(),
    };
    return context;
}
//GETs user database and iterates over it
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
                        window.location.replace("/game");
                    } else {
                        window.location.replace("/login");
                    }
            }

        }
    });
}
//Random constructor, Make use of me
function UserData(userObj) {
    this.info = {
        username: userObj.username,
        password: userObj.password,
        totalpoints: userObj.total_points,

    };
}


function signUpValues() {
    var newContext = {
        username: $('#username').val(),
        password: $('#password').val(),
        confirm: $('#confirm').val()
    };
    if (newContext.password === newContext.confirm) {
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
         window.location.replace('/login');
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
//Flying Tater. Why? Not sure...
var tater = function($tater,speed){
    $tater.animate({
        "left": "90%",
        "top": "100%"
    }, speed);
};
$('.login-logo').click(function() {
  goodTimes();
});
function goodTimes(){
    tater($("#flying-pot").show(), 5000);
}

//Game Logic







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
