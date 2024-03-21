

 $(document).ready(function() {
    var notes = $(".note")
    var btn = $("#bot")

  

    function Storage() {
        localStorage.setItem("stor", notes.html())
    }


    function show() {
        notes.html(localStorage.getItem("stor"))
    }
    show()
    

    btn.on("click", function() {
        var p = $("<p></p>").addClass("tabn").attr("contenteditable", "true")
        var image = $("<img>").attr("src", "./img/delete.png")
        p.append(image)
        notes.append(p)
        Storage()
    });

    notes.on("click", "img", function() {
        $(this).parent().remove()
        Storage()
    })

    notes.on("keyup", ".tabn", function() {
        Storage()
    })


    $(document).on("keydown", function(event) {
        if (event.key === "Enter") {
            document.execCommand("insertLineBreak")
            event.preventDefault()
        }
    })
})