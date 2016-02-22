$(document).ready(function() {
        $.getJSON("js/maindata.json", function json1(data) {
                var $jsondiv = $(".test");
                var strHtml = "";
                $.each(data, function(index, catagoryarray) {
                        $.each(data, function(i1, catagoryarray) {
                                strHtml = strHtml + "<div class=" + "'" + index + "'>";
                                $.each(catagoryarray, function(i2, sentenceobject) {
                                        // strHtml = strHtml + "index: " + i + "value: " + sentenceobject;
                                        if (typeof sentenceobject == "string") {
                                            strHtml = strHtml + "<h3>" + sentenceobject + "</h3>";
                                        } else {
                                            strHtml = strHtml + "<ul>";
                                            $.each(sentenceobject, function(j, value) {
                                                strHtml = strHtml + "<li>" + "<input type='radio' name='" + value.radioname + " id=" + j + " value=" + j + " class='" + value.ctype + "' /><label for=" + j + ">" + value.showtext + "</label>" + "</li>";



                                                //  strHtml = strHtml + "index: " + j + "value: " + value;
                                                // body...
                                            })
                                            strHtml = strHtml + "</ul>";
                                        }

                                    })


                                }) strHtml = strHtml + "</div>";
                        }) $jsondiv.empty(); $jsondiv.html(strHtml);
                }); $(function() {
                $("#select_all_btn").click(function() {
                    $(".email").select();
                })
            }); $(function() {
                $(".greeting h3").bind("click", function() {
                    $(".greeting div").toggle("slow");
                });
            }); $(function() {
                $(".reason h3").bind("click", function() {
                    $(".reason div").toggle("slow");
                });
            }); $(function() {
                $(".requesting h3").bind("click", function() {
                    $(".requesting div").toggle("slow");
                });
            }); $(function() {
                $(".offering h3").bind("click", function() {
                    $(".offering div").toggle("slow");
                });
            }); $(function() {
                $(".ending h3").bind("click", function() {
                    $(".ending div").toggle("slow");
                });
            }); $(function() {
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