$(document).ready(function() {
    $("#login").submit(function(event) {
      event.preventDefault() 

     
      var username = $("#userName").val()
      var password = $("#pass").val()

      
      if (username === "ahmed" && password === "gafsi") {
        alert("Login successfuly")
        window.location.href = "./file.html"
        
      } else {
        alert("Invalid username or password.try again.")
      }
    })
  })