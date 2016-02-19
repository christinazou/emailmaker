$(document).ready(function(){
$(function() {
  $("#select_all_btn").click(function() {
    $(".email").select();
  })
});
$(function() {
  $(".greeting h3").bind("click", function() {
    $(".greeting div").toggle("slow");
  });
});
$(function() {
  $(".reason h3").bind("click", function() {
    $(".reason div").toggle("slow");
  });
});
$(function() {
  $(".requesting h3").bind("click", function() {
    $(".requesting div").toggle("slow");
  });
});
$(function() {
  $(".ending h3").bind("click", function() {
    $(".ending div").toggle("slow");
  });
});
$(function() {
  $(".closing h3").bind("click", function() {
    $(".closing div").toggle("slow");
  });
});

$("input").change(function() {
  var etxt = ""
  if ($("input[name=1]:checked").val() !== undefined) {
    if($("input[name=1]").class=="formal"){
       etxt = etxt + $("input[name=1]:checked").val()+ $(".to") + "\n\n"
    }else{
       etxt = etxt + $("input[name=1]:checked").val()+ "2" + "\n\n"
    }
   
  }
  if ($("input[name=2]:checked").val() !== undefined) {
    etxt = etxt + $("input[name=2]:checked").val()
  }
  if ($("input[name=3]:checked").val() !== undefined) {
    etxt = etxt + $("input[name=3]:checked").val()
  }
  if ($("input[name=4]:checked").val() !== undefined) {
    etxt = etxt + $("input[name=4]:checked").val()
  }
  if ($("input[name=5]:checked").val() !== undefined) {
    etxt = etxt + "\n\n" + $("input[name=5]:checked").val()
  }
  $(".email").text(etxt);
});
});
