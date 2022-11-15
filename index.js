let pickedRating;
$( ".rating" ).click(function() {
    $(".rating").removeClass("selected");
    $(this).toggleClass("selected");
    pickedRating = this.innerText;
});


$("#submit-button").click(function (){
    $("#rating-card").attr("hidden", "");
    $("#thank-you").removeAttr("hidden");
    $(".answer").text("You selected " + pickedRating + " out of 5");
})