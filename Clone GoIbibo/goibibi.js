$("#one").click(function () {
    $("#oneclick").show();
    $("#roundclick").hide();
    $("#multiclick").hide();
})

$("#round").click(function () {
    $("#roundclick").show();
    $("#oneclick").hide();
    $("#multiclick").hide();
})

$("#multi").click(function () {
    $("#multiclick").show();
    $("#oneclick").hide();
    $("#roundclick").hide();
})
$(".btn1").click(function () {
    $(this).hide();
    $(".extraflight1").show();
    $(".btn2").show();
})
$(".btn2").click(function () {
    $(this).hide();
    $(".extraflight2").show();
    $(".btn3").show();
})
$(".btn3").click(function () {
    $(this).hide();
    $(".extraflight3").show();
})

$(".divbtn1").click(function () {
    $(this).hide();
    $(".hidediv").show();
    $(".divbtn2").show();
})

$(".divbtn2").click(function () {
    $(this).hide();
    $(".hidediv").hide();
    $(".divbtn1").show();
})
$(document).ready(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
});

$(document).ready(function () {
    $('.toast').toast('show');
});
setInterval(displayHello, 1000);

function displayHello() 
{
  var today = new Date();
  var time = (today.getHours()) + ":" + today.getMinutes() + ":" + today.getSeconds();
  if(time=="24:00:00")
  {
	
  }
  {
  document.getElementById("time").innerHTML = time;
  }
};

