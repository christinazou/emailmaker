(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-73419263-1', 'auto');
ga('send', 'pageview');



window._mfq = window._mfq || [];
(function() {
    var mf = document.createElement("script");
    mf.type = "text/javascript";
    mf.async = true;
    mf.src = "//cdn.mouseflow.com/projects/cd73e9af-b8c1-4372-b2b4-bacc792e699b.js";
    document.getElementsByTagName("head")[0].appendChild(mf);
})();
ga('create', 'UA-73419263-1', 'auto');
ga('send', 'pageview');

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

$(document).ready(function() {

	// sessions 
    // load from sessions
    sessionStorage['myKey'] = 'somestring';
    $(".to").children(".firstname").val(sessionStorage["tofirstname"]);
    $(".to").children(".lastname").val(sessionStorage["tolastname"]);
    $(".from").children(".firstname").val(sessionStorage["fromfirstname"]);
    $(".from").children(".lastname").val(sessionStorage["fromlastname"]);

    // save to sessions
    $(".to>input,.from>input").change(function() {
        sessionStorage["tofirstname"] = $(".to").children(".firstname").val();
        sessionStorage["tolastname"] = $(".to").children(".lastname").val();
        sessionStorage["fromfirstname"] = $(".from").children(".firstname").val();
        sessionStorage["fromlastname"] = $(".from").children(".lastname").val();
    });
    //sessions end

	//accordion
    function close_accordion_section() {
        $(' .accordion-section-title').removeClass('active');
        $(' .accordion-section-content').slideUp(300).removeClass('open');
    }

    $('.accordion-section-title').on('click', function(e) {
        e.preventDefault();
        var currentAttrValue = $(this).next();

        if ($(this).is('.active')) {
            close_accordion_section();
        } else {
            close_accordion_section();
            $(this).addClass('active');
            $(currentAttrValue).slideDown(300).addClass('open');
        }
    });
    //accordion end

    $("input,.to>input,.from>input").change(function() {

    	var resultTxt = "";
    	var greet = $("input[name=1]:checked").val();
        var tofirstname = $(".to").children(".firstname").val();
        var tolastname = $(".to").children(".lastname").val();
        var fromfirstname = $(".from").children(".firstname").val();
        var fromlastname = $(".from").children(".lastname").val();

        tofirstname = capitalizeFirstLetter(tofirstname);
        tolastname = capitalizeFirstLetter(tolastname);
        fromfirstname = capitalizeFirstLetter(fromfirstname);
        fromlastname = capitalizeFirstLetter(fromlastname);



        // greeting with names
        if (greet !== undefined) {
            var className = $("input[name=1]:checked").attr('class');
            switch (className) {
                case 'mustfirstname':
                    if (tofirstname === null || tofirstname === "") {
                        resultTxt = resultTxt + greet + " " + "*** " + ",\n\n";
                    } else {
                        resultTxt = resultTxt + greet + " " + tofirstname + ",\n\n";
                    }
                    break;
                case 'needfirstname':
                    if (tofirstname === null || tofirstname === "") {
                        resultTxt = resultTxt + greet + ",\n\n"
                    } else {
                        resultTxt = resultTxt + greet + " " + tofirstname + ",\n\n";
                    }
                    break;
                case 'mustlastname':
                    if (tolastname === null || tolastname === "") {
                        resultTxt = resultTxt + greet + " " + "*** " + ",\n\n";
                    } else {
                        resultTxt = resultTxt + greet + " " + tolastname + ",\n\n";
                    }
                    break;
                case 'needlastname':
                    if (tolastname === null || tolastname === "") {
                        resultTxt = resultTxt + greet + ",\n\n"
                    } else {
                        resultTxt = resultTxt + greet + " " + tolastname + ",\n\n";
                    }
                    break;
                case 'noname':
                    resultTxt = resultTxt + greet + "\n\n";
                    break;
            }
        }

        if ($("input[name = 2]:checked").val() !== undefined) {
    	$("input[name = 2]").each(function () {
    		if (this.checked) {
    			resultTxt = resultTxt + $(this).val();
    		}
    	});

    	resultTxt = resultTxt + "\n\n";
    }

    	 if ($("input[name = 3]:checked").val() !== undefined) {
            resultTxt = resultTxt + $("input[name = 3]:checked").val() + "\n\n";
        }

        if ($("input[name = 2]:checked").val() !== undefined) {
    	$("input[name = 4]").each(function () {
    		if (this.checked) {
    			resultTxt = resultTxt + $(this).val();
    		}
    	});

    	resultTxt = resultTxt + "\n\n";
    }

       if ($("input[name = 5]:checked").val() !== undefined) {
            resultTxt = resultTxt + $("input[name = 5]:checked").val() + "\n\n";
        }

        if ($("input[name = 6]:checked").val() !== undefined) {
            resultTxt = resultTxt + $("input[name = 6]:checked").val() + "\n\n";
        }

        if ($(".from").children(".firstname").val() !== null && $(".from").children(".firstname").val() !== "") {
            resultTxt = resultTxt + fromfirstname + " " + fromlastname +"\n\n";
        }


    	$("#email").val(resultTxt);
    });

     $("#select_all_btn").click(function() {
        $("#email").select();
    });


    $("#clear_all_btn").click(function() {
        $("#email").val("");
        $(".to>input,.from>input").val("");
        $('input[type = radio]').removeAttr("checked");
        sessionStorage.clear();

    });
});