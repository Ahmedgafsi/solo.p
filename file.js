

 $(document).ready(function() {
    var notes = $(".note")
    var btn = $("#bot")

    function show() {
        notes.html(localStorage.getItem("boxx"))
    }
    show()

    function updateStorage() {
        localStorage.setItem("boxx", notes.html())
    }
   
    btn.on("click", function() {
        var p = $("<p></p>").addClass("tabn").attr("contenteditable", "true")
        var image = $("<img>").attr("src", "./img/delete.png")
        p.append(image)
        notes.append(p)
        updateStorage()
    });

    notes.on("click", "img", function() {
        $(this).parent().remove()
        updateStorage()
    })

    notes.on("keyup", ".tabn", function() {
        updateStorage()
    })


    $(document).on("keydown", function(event) {
        if (event.key === "Enter") {
            document.execCommand("insertLineBreak")
            event.preventDefault()
        }
    })
})