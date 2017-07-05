$.getJSON("js/maindata.json",function json1 (data) {
	var $jsondiv =$(".test");
	var strHtml="";

	$jsondiv.empty();
	$jsondiv.html(data.toString());
})

 //name is at index = 0, iteration from index = 1