var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

$(function() {
  $("form").submit(function(event) {debugger;

    var sentence = $("#sentence").val();

    var newSentence = sentence;

    for(var index = 0; index < vowels.length; index +=1) {
      newSentence = newSentence.split(vowels[index]).join("-");
    }

    $(".player1").hide();

    $(".player2").show();

    $("#output").text(newSentence);

    event.preventDefault();
  });

});
