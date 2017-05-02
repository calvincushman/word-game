var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

// var newSentence = [];

$(function() {

  var sentence = "";
  var newSentence = "";

  $("form#one").submit(function(event) {

    sentence = $("#sentence").val();

    newSentence = sentence;

    for(var index = 0; index < vowels.length; index +=1) {
      newSentence = newSentence.split(vowels[index]).join("-");
    }

    $(".player1").hide();

    $(".player2").show();

    $("#output").text(newSentence);


    event.preventDefault();
  });

  $("form#two").submit(function(event) {
    // var sentence2 = $("#sentence").val();
    alert(newSentence);
    alert(sentence);

    var playerSentence = $("#guess").val();

    if (playerSentence === sentence) {
      alert("YOU WIN");
    } else {
      alert("WRONG, try again");
    }

    event.preventDefault();

  });

});
