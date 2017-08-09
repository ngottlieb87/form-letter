$(document).ready(function() {
  $("#letter").submit(function() {
    var firstName = $("input#firstName").val();
    var lastName = $("input#lastName").val();
    var letterBody= $("input#letterBody").val();


    $(".firstName").text(firstName);
    $(".lastName").text(lastName);
    $(".finalLetter").text(letterBody);


    // $("letter").show();

    event.preventDefault();
  });

    $("#letter").submit(function() {
      // $("#letterStyle").hide();
      $("letterStyle").slideToggle(800);
      $("#letter").slideToggle(800);
      $("h1").slideToggle(800)
    });

});
