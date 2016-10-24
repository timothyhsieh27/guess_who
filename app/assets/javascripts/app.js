(function($) {
  //On pageload instructions pop up
  $(function(){
    $('#game-instructions').hide().fadeIn(2500);
    $('#flying-pot').hide();
    $('#choose-tater').hide();
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
  /**************************************
  Mr. Potato Who Game
  **************************************/
  function PotatoGame() {
    this.pageNav();
    this.potatoBoard();
  }
  /**************************************
  When users click on prop, it will appear on potato
  **************************************/

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


  /***************************************
 Secret potato constructor
****************************************/
function PotatoGame(context) {
     this.info = {
      hat: true, //change to context.hat
      mustache: false, //change to context.mustache
      bowTie: false, //you get the idea...
      glasses: true,
      tattoo: true,
      fork: true
    };
    var self = this;
    var image = $(this).attr("src");
    $('#glasses').on('click', 'img', function() {
      tryCounter();
      if(self.info.glasses === true) {
        $('.propFeatures .glasses').show();
      } else {
        $('.propFeatures .glasses').hide();
        checkTaters("Glasses", "glasses");
      }
      });
      $('#hat').on('click', 'img', function() {
       tryCounter();
      if(self.info.hat === true) {
        $('.propFeatures .hat').show();
      } else  {
        $('.propFeatures .hat').hide();
        checkTaters("Hat", "hat");
      }
      });
      $('#bow-tie').on('click', 'img', function() {
        tryCounter();
      if(self.info.bowTie === true) {
        $('.propFeatures .bow-tie').show();
      } else {
        $('.propFeatures .bow-tie').hide();
        checkTaters("Bow-tie", "bow-tie");
      }
      });
      $('#mustache').on('click', 'img', function() {
        tryCounter();
      if(self.info.mustache === true) {
        $('.propFeatures .mustache').show();
      } else {
        $('.propFeatures .mustache').hide();
        checkTaters("Mustache", "mustache");
      }
      });
      $('#tattoo').on('click', 'img', function() {
        tryCounter();
      if(self.info.tattoo === true) {
        $('.propFeatures .tattoo').show();
      } else {
        $('.propFeatures .tattoo').hide();
        checkTaters("Tattoo", "tattoo");
      }
      });
      $('#fork').on('click', 'img', function() {
       tryCounter();
      if(self.info.fork === true) {
        $('.propFeatures .fork').show();
      } else {
        $('.propFeatures .fork').hide();
        checkTaters("Fork","fork");
      }
    });

    function checkTaters(Feature, feature) {
     Feature = "/app/assets/images/" + feature + ".svg";
     $(".person-container img").each(function() {
          if ($(this).attr("src") == Feature) {
        $(this).css("background", "red");
   }
   });

   }


}

// Check number of tries
var tries = 0;
function tryCounter() {
  if (tries === 0) {
    $('#0').css( "color", "red");
    tries += 1;
  }
   else if(tries === 1) {
    $('#1').css( "color", "red");
    tries += 1;
  }
  else if (tries === 2) {
    $('#2').css( "color", "red");
    tries += 1;
    $('#choose-tater').fadeIn(1000).fadeOut(3000);
  }

}

/***************************************
  div loops
***************************************/
function CheckTaters(feature){
var hat = "/app/assets/images/hat",
    mustache = "/app/assets/images/mustache",
    glasses = "/app/assets/images/glasses",
    fork = "/app/assets/images/fork",
    tattoo = "/app/assets/images/tattoo",
    bowTie = "/app/assets/images/bow-tie";

$(".props").each(function(){
    if($(this).attr("src") !== feature ){
      alert($(this).attr("alt"));
    }
})
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
var tater = function(tater,speed){
    tater.animate({
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
