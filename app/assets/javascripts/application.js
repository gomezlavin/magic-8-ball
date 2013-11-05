// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


var getAnswer = function(question){
  $.ajax( "/questions", {  
    type: "post",
    data: {
      question: question
    },
    success: function(data){
      $("h3").html(data.text);
    }
  });

}


$(function(){

  $("#answer").hide();

  $("#question_button").on("click",function(){
    event.preventDefault();
    if($("#question_field").val()!=""){

      if($('#answer').is(':hidden')){
        getAnswer($("#question_field").val());
        $("#answer").fadeIn(900);
      }
      else{
        $("#answer").fadeOut(700);
        var interval = setInterval(function(){
          getAnswer($("#question_field").val());
          clearInterval(interval)},700);
        $("#answer").fadeIn(900);
      }
    }
    $("#question_field").val("");
  });

});