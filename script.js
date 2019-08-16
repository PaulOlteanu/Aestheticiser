function aestheticise_text(text_in) {
    return text_in.split(" ").map(word => word.split("").join(" ")).join("  ")
}

function aestheticise() {
    message = $("#aes-input")[0].value || "This is some aesthetic text"
    message = aestheticise_text(message)
    $("#aes-output")[0].innerHTML = message
}

$("#aes-submit").click(function(e) {
    e.preventDefault()
    aestheticise()
})

$(document).ready(function() {
    aestheticise()
})
