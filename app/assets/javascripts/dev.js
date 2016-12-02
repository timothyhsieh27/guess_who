

$('#login').submit(function(event) {
  event.preventDefault();
  loginValues();
});

function loginValues() {
       var context = {
           username: $('#username').val(),
           password: $('#password').val(),
       };
       checkUsers(context);
   }


function checkUsers(context) {
    $.ajax({
        "method": "GET",
        "url": '/login + context',
        "data": {},
        "datatype": "json",
        "success": function(data) {
          console.log(data);
            }
        });
}
