$(document).ready(function(){
  $.getJSON("js/maindata.json",function json1 (data) {
  var $jsondiv =$(".test");
  var strHtml="";
$.each(data,function(index,value){
  strHtml=strHtml+"index"+index+"value"+value;
}
  )
  $jsondiv.empty();
  $jsondiv.html(strHtml);
});
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
  $(".offering h3").bind("click", function() {
    $(".offering div").toggle("slow");
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
    if($("input[name=1]:checked").val()==="Hi"||$("input[name=1]:checked").val()==="Hello"){
      if($(".to").val()===null||$(".to").val()===""){
        etxt = etxt + $("input[name=1]:checked").val()+ ",\n\n"
      }else{
        etxt = etxt + $("input[name=1]:checked").val()+" "+ $(".to").val() + ",\n\n";
      }
    }else{
       etxt = etxt + $("input[name=1]:checked").val() + "\n\n"
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
    etxt = etxt + $("input[name=4]:checked").val()
  }
  if ($("input[name=6]:checked").val() !== undefined) {
    etxt = etxt + "\n\n" + $("input[name=5]:checked").val()
  }
  $(".email").text(etxt);
});
});
