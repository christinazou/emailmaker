$(document).ready(function() {
    $.getJSON("js/maindata.json", function json1(data) {
        var $jsondiv = $(".test");
        var items = [];
        $.each(data, function(i1, catagory) {
            items.push("<div class=" + "'" + i1 + "'>");
            $(function() {
                $("."+i1 +" h3").bind("click", function() {
                $("."+i1 +" ul").toggle("slow");
                });
            });
            for (var i = 0; i <= catagory.length - 1; i++) {
                var x = catagory[i];
                // strHtml = strHtml + "index: " + i + "value: " + catagory[i];
                if (i == 0) {
                    items.push("<h3>" + x.cname + "</h3>");
                    items.push("<ul>");
                } else if (i > 0 && i < catagory.length - 1) {
                    items.push("<li>" + "<input type='radio' name='" + x.radioname + " id=" + x.val + " value=" + x.val + " class='" + x.ctype + "' /><label for=" + x.val + ">" + x.showtext + "</label>" + "</li>");
                    //  strHtml = strHtml + "index: " + j + "value: " + value;
                    // body...
                } else {
                     items.push("<li>" + "<input type='radio' name='" + x.radioname + " id=" + x.val + " value=" + x.val + " class='" + x.ctype + "' /><label for=" + x.val + ">" + x.showtext + "</label>" + "</li>");
                    items.push("</ul>");
                };
            };
            items.push("</div>")
        });
        $jsondiv.empty();
        $("<ul/>", {
            "class": "my-new-list",
            html: items.join("")
        }).appendTo($jsondiv);
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
            if ($("input[name=1]:checked").val() === "Hi" || $("input[name=1]:checked").val() === "Hello") {
                if ($(".to").val() === null || $(".to").val() === "") {
                    etxt = etxt + $("input[name=1]:checked").val() + ",\n\n"
                } else {
                    etxt = etxt + $("input[name=1]:checked").val() + " " + $(".to").val() + ",\n\n";
                }
            } else {
                etxt = etxt + $("input[name=1]:checked").val() + "\n\n"
            }
        }

        for (var i = 2; i >= 8; i++) {
            if ($("input[name=i]:checked").val() !== undefined) {
                etxt = etxt + $("input[name=i]:checked").val()
            }
        };
        if ($("input[name=6]:checked").val() !== undefined) {
            etxt = etxt + "\n\n" + $("input[name=5]:checked").val()
        }
        $(".email").text(etxt);
    });
});
